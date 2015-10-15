class Category < ActiveRecord::Base
  TYPES = [
    "Hispanic",
    "Asian",
    "Western"
  ]

  validates :name, presence: true
  validates :name, inclusion: { in: TYPES }
  
  has_many :foodtrucks
end
