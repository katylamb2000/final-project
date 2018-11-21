class Teacher < ApplicationRecord
    has_many :teacher_camps
    has_many :camps, through: :teacher_camps
    has_many :lessons
    has_many :students, through: :lessons
end
