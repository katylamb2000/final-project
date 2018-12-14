class ApplicationController < ActionController::API
    def issue_token(data)
        JWT.encode(data, secret)
    end

    def get_current_student
        id = decoded_token['id']
        Student.find_by(id: id)
    end

    def get_current_teacher
        id = decoded_token['id']
        Teacher.find_by(id: id)
    end

    def decoded_token
        token = request.headers['Authorization']
        begin
            JWT.decode(token, secret)[0]
        rescue JWT::DecodeError
            {}
        end
    end

    def secret
         "tellnobody"
        # ENV['API_SECRET']
        # create an environment varialble with secret. save on server or in gitignore file. 
    end
end
