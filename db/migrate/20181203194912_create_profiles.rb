class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :student_id
      t.string :integer

      t.timestamps
    end
  end
end
