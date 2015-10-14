class Donation < ActiveRecord::Base
  validates :amount, :foodtruck_id, :backer_id, :perk_id, presence: true
end
