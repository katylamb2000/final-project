class AddPhotoToCamps < ActiveRecord::Migration[5.2]
  def change
    add_column :camps, :photo, :string
  end
end
