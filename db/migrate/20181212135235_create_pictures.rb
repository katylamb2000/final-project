class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :description
      t.integer :gallery_id

      t.timestamps
    end
  end
end
