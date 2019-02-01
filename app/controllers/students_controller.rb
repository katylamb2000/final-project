class StudentsController < ApplicationController
    def sign_in
        
        student = Student.find_by(username: params[:username])
        if student && student.authenticate(params[:password])
           
            render json: {username: student.username, token: issue_token({id: student.id}), id: student.id}
        else
            render json: {error: 'Invalid username/password combination.'}, status: 400
        end
end

    def validate
    student = get_current_student
    if student
        render json: {username: student.username, token: issue_token({id: student.id})}
    else
        render json: {error: "User not found"}
        end
    end

    def create
        puts params["password"]
            student = Student.create(username: params[:username], password: params[:password])
        # , photo: "https://www.danburyhospital.org/-/media/wchn/shared/find-a-doc/0/0-placeholderuser.png?la=en&h=200&w=200&mw=200&hash=3A5B944E8ABE2FE4951ADA8A53064D67D58DC688")
       
        if student
                    render json: {username: student.username, token: issue_token({id: student.id}), id: student.id,  }
            # , photo: "https://www.danburyhospital.org/-/media/wchn/shared/find-a-doc/0/0-placeholderuser.png?la=en&h=200&w=200&mw=200&hash=3A5B944E8ABE2FE4951ADA8A53064D67D58DC688"}
        else
            render json: {error: "User not found"}
        end

    end
    def index
        @students = Student.all
        render json: @students
      end

    

      def get_all_students
        students = []
        Student.all.each do |student| 
          
            students << { username: student.username, id: student.id}
        end
        render json: students
    end


    # def profile_picture(student_id)
    #     student = Student.find!(student_id)
    #     if student.avatar.attached?
    #         image_tag student.avatar
    #     else
    #         image_tag 'default_avatar.jpg'
    #     end
    # end

         def update_profile_picture
        student = get_current_student
        student.update(image: params[:image])

        render json: {username: student.username, token: issue_token({id: student.id}), image: student.image}
    end
    # def get_student
    #     student = get_current_student
    #     if student 
    #         student = []
    #         # user.cvs.each do |cv| 
    #         #     lists = []
    #         #     cv.lists.each do |list|
    #         #         lists << { name: list.title, id: list.id, cv_id: list.cv_id, list_items: list.list_items }
    #         #     end
    #             student << { username: student.username, id: student.id }
    #         end
    #         render json: student

    #     else
    #         render json: {error: "you are not signed in."}
    #     end
    # end
end