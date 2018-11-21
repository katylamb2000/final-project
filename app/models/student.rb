class Student < ApplicationRecord
    has_many :lessons
    has_many :teachers, through: :Lessons
    has_many :camps 
    has_many :camps, through: :student_camps

end
