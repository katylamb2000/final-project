class Student < ApplicationRecord
    validates_uniqueness_of :username
    has_secure_password
    has_many :lessons
    has_many :teachers, through: :Lessons
    has_many :student_camps 
    has_many :camps, through: :student_camps
    has_one_attached :profile_picture
 
   

end
