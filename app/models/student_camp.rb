class StudentCamp < ApplicationRecord
    belongs_to :student
    belongs_to :camp
end
