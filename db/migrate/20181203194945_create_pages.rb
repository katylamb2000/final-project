class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :camp_id
      t.string :integer

      t.timestamps
    end
  end
end
