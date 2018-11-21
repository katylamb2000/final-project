class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.datetime :time
      t.boolean :paid
      t.integer :teacher_id
      t.integer :student_id
      t.integer :teacher_camp_id

      t.timestamps
    end
  end
end
