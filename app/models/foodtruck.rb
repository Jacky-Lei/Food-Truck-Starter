# == Schema Information
#
# Table name: foodtrucks
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text             not null
#  author_id    :string           not null
#  integer      :string           not null
#  end_date     :date             not null
#  image        :string           default("http://images.clipartpanda.com/food-delivery-truck-clipart-yTo8MzjTE.jpeg")
#  category_id  :integer          not null
#  funding_goal :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Foodtruck < ActiveRecord::Base
end