class Perk < ActiveRecord::Base
  validates :name, :description, :amount, :foodtruck_id, presence: true
  validates :amount, numericality: true
  
  has_one :donation
  belongs_to :foodtruck
end
