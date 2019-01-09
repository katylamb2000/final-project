class Camp < ApplicationRecord
    has_many :teacher_camps
    has_many :teachers, through: :teacher_camps
    has_many :student_camps
    has_many :students, through: :student_camps
    has_one :page
end
