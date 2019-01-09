class CreateResumes < ActiveRecord::Migration[5.2]
  def change
    create_table :resumes do |t|
      t.string :teacher_id
      t.string :integer

      t.timestamps
    end
  end
end
