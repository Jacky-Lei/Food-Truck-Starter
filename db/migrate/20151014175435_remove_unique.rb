class RemoveUnique < ActiveRecord::Migration
  def change
    remove_index :donations, :foodtruck_id
    remove_index :perks, :foodtruck_id

    add_index :donations, :foodtruck_id
    add_index :perks, :foodtruck_id
  end
end
