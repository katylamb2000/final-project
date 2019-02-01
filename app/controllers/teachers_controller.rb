class TeachersController < ApplicationController

    

    def index
        @teachers = Teacher.all
        render json: @teachers
      end

      def sign_in
        teacher = teacher.find_by(username: params[:username])
        if teacher && teacher.authenticate(params[:password])
            render json: {username: teacher.username, token: issue_token({id: teacher.id})}
        else
            render json: {error: 'Invalid username/password combination.'}
        end
end

      def validate
        teacher = get_current_teacher
        if teacher
            render json: {username: teacher.username, token: issue_token({id: get_current_teacher.id})}
        else
            render json: {error: "Teacher not found"}
            end
        end

        def teacher_avatar(teacher_id)
            teacher = Teacher.find!(teacher_id)
            if teacher.avatar.attached?
                image_tag teacher.avatar
            else
                image_tag 'default_avatar.jpg'
            end
        end


    def get_teacher
        teacher = get_current_teacher
        if teacher 
            # cvs = []
            # user.cvs.each do |cv| 
            #     lists = []
            #     cv.lists.each do |list|
            #         lists << { name: list.title, id: list.id, cv_id: list.cv_id, list_items: list.list_items }
            #     end
            #     cvs << { title: cv.name, id: cv.id, text_items: cv.text_items, lists: lists, skills: cv.skills, contact_details: cv.contact_details }
            # end
            render json: teacher

        else
            render json: {error: "you are not signed in."}
        end
    end

      def create
        puts params["password"]
        teacher = Teacher.create!(username: params[:username], password: params[:password])
        teacher.avatar.attach(params[:teacher][:image])
       
        if teacher
            render json: {username: teacher.username, token: issue_token({id: teacher.id}), avatar: teacher.avatar}
        else
            render json: {error: "Teacher not found"}
        end
    end

    #   def create
    #     @teacher = Teacher.create(username: params[:name], nationality: params[:nationality], bio: params[:bio], photo: params[:photo]) 
    
    #     render json: @teacher
    # end
    # def update_avatar
    #     teacher = get_current_teacher
    #     teacher.update(avatar: params[:image])

    #     render json: {avatar: teacher.avatar}
    # end

# def set_teacher
#     @teacher = Teacher.find(params[:id])
# # end
#       def teacher_params
#         params.require(:teacher).permit(:avatar)
#       end

      def get_all_teachers
        teachers = []
        Teacher.all.each do |teacher| 
          
            teachers << { username: teacher.username, id: teacher.id }
        end
        render json: teachers
    end
end

