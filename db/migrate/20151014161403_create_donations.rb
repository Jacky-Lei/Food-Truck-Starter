class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.integer :amount, null: false
      t.integer :foodtruck_id, null: false
      t.integer :backer_id, null: false
      t.integer :perk_id

      t.timestamps null: false
    end
    add_index :donations, :foodtruck_id, unique: true
    add_index :donations, :backer_id
  end
end
