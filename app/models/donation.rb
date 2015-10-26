class Donation < ActiveRecord::Base
  validates :amount, :foodtruck_id, :backer_id, presence: true
  validates :amount, numericality: { greater_than: 0 }
  belongs_to(:user, foreign_key: :backer_id)
  belongs_to :foodtruck
  belongs_to :perk


end
