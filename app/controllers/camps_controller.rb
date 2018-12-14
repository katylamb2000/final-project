class CampsController < ApplicationController

    NewCV = []

    def index
        @camps = Camp.all
        render json: @camps
      end

     

      def get_all_camps
        camps = []
        Camp.all.each do |camp| 
          
            camps << { title: camp.name, id: camp.id, location: camp.location, photo: camp.photo, teachers: camp.teachers, students: camp.students }
        end
        render json: camps
    end

end