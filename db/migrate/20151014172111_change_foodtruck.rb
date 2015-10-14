class ChangeFoodtruck < ActiveRecord::Migration
  def change
    remove_column :foodtrucks, :integer
  end
end
