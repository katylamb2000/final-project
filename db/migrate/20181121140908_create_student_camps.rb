class CreateStudentCamps < ActiveRecord::Migration[5.2]
  def change
    create_table :student_camps do |t|
      t.integer :student_id
      t.integer :camp_id

      t.timestamps
    end
  end
end
