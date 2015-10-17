class UserChangeAuthorIdType < ActiveRecord::Migration
  def change
    remove_column :foodtrucks, :author_id
    add_column :foodtrucks, :author_id, :integer
  end
end
