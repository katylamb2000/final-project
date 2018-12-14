Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :teachers
  resources :teacher_camps
  resources :students
  resources :student_camps
  resources :lessons
  resources :camps
  get 'get_all_students', to: 'students#get_all_students'
  get 'get_all_teachers', to: 'teachers#get_all_teachers'
  get 'get_all_camps', to: 'camps#get_all_camps'
  get 'get_students', to: 'students#get_student'
  post 'signin', to: 'students#sign_in'
  get 'validate', to: 'students#validate'
  post "update_profile_picture", to: 'students#update_profile_picture'
end
