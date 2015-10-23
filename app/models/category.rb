class Category < ActiveRecord::Base
  TYPES = [
    "Hispanic",
    "Asian",
    "American",
    "Indian",
    "European"
  ]

  validates :name, presence: true
  validates :name, inclusion: { in: TYPES }

  has_many :foodtrucks
  has_many :donations, through: :foodtrucks, source: :donations
end
