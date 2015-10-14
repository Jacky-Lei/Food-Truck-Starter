class CreatePerks < ActiveRecord::Migration
  def change
    create_table :perks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :amount, null: false
      t.integer :foodtruck_id, null: false

      t.timestamps null: false
    end
    add_index :perks, :foodtruck_id, unique: true
  end
end
