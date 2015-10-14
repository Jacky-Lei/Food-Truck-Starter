class Perk < ActiveRecord::Base
  validates :name, :description, :amount, :foodtruck_id, presence: true
end
