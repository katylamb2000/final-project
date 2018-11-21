class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :nationality
      t.string :photo
      t.string :bio

      t.timestamps
    end
  end
end
