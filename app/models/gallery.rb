class Gallery < ApplicationRecord
    belongs_to :student
    belongs_to :camp
    belongs_to :teacher
    has_many :pictures
end
