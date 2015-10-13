class CreateFoodtrucks < ActiveRecord::Migration
  def change
    create_table :foodtrucks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :author_id, null: false
      t.string :integer, null: false
      t.date :end_date, null: false
      t.string :image, default: "http://images.clipartpanda.com/food-delivery-truck-clipart-yTo8MzjTE.jpeg"
      t.integer :category_id, null: false
      t.integer :funding_goal, null: false

      t.timestamps null: false
    end
    add_index :foodtrucks, :author_id
    add_index :foodtrucks, :category_id
  end
end
