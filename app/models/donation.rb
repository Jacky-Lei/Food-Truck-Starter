class Donation < ActiveRecord::Base
  validates :amount, :foodtruck_id, :backer_id, presence: true
  validates :amount, numericality: true
  belongs_to :user
  belongs_to :foodtruck
  belongs_to :perk
end
