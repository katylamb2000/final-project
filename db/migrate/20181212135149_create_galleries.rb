class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.integer :student_id
      t.integer :camp_id
      t.integer :teacher_id

      t.timestamps
    end
  end
end
