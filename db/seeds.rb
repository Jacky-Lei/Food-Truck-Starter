# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)




foodtruck = [
  {
    "title"=>"Burrito Truck",
    "description"=>"Massive Burritos for the burrito lord in all of us!",
    "author_id"=>1,
    "end_date"=>"2015-9-1",
    "image"=>"http://www.carlosandgabbysbrooklyn.com/images/chicken%20burrito.jpg",
    "category_id"=>1,
    "funding_goal"=>1000
  },
  {
    "title"=>"2Burrito Truck",
    "description"=>"2Massive Burritos for the burrito lord in all of us!",
    "author_id"=>2,
    "end_date"=>"2015-9-2",
    "image"=>"http://www.carlosandgabbysbrooklyn.com/images/chicken%20burrito.jpg",
    "category_id"=>1,
    "funding_goal"=>2000
  },
  {
    "title"=>"Chow Mein Truck",
    "description"=>"Chow Mein box for you!",
    "author_id"=>1,
    "end_date"=>"2015-10-1",
    "image"=>"http://cdn.recipes100.com/v/7433722d75def5d533da8dd72dcf6cdb.jpg",
    "category_id"=>2,
    "funding_goal"=>1000
  },
  {
    "title"=>"2Chow Mein Truck",
    "description"=>"2Chow Mein box for you!",
    "author_id"=>3,
    "end_date"=>"2015-10-2",
    "image"=>"http://cdn.recipes100.com/v/7433722d75def5d533da8dd72dcf6cdb.jpg",
    "category_id"=>2,
    "funding_goal"=>2000
  },
  {
    "title"=>"Burger Truck",
    "description"=>"Burger and cheese baby!",
    "author_id"=>4,
    "end_date"=>"2015-11-1",
    "image"=>"http://aht.seriouseats.com/images/2012/04/20120427-bk-japan-ringo-burger-product-shot.jpg",
    "category_id"=>3,
    "funding_goal"=>1131
  },
  {
    "title"=>"Burrito Truck",
    "description"=>"Massive Burritos for the burrito lord in all of us!",
    "author_id"=>5,
    "end_date"=>"2015-11-2",
    "image"=>"http://aht.seriouseats.com/images/2012/04/20120427-bk-japan-ringo-burger-product-shot.jpg",
    "category_id"=>3,
    "funding_goal"=>2281
  },
  ]

donation = [
  {
    "amount"=>100,
    "foodtruck_id"=>1,
    "backer_id"=>1,
    "perk_id"=>1,
  },
  {
    "amount"=>200,
    "foodtruck_id"=>1,
    "backer_id"=>1,
    "perk_id"=>2,
  },
  {
    "amount"=>3,
    "foodtruck_id"=>1,
    "backer_id"=>1,
  },
  {
    "amount"=>20,
    "foodtruck_id"=>2,
    "backer_id"=>5,
    "perk_id"=>3,
  },
  ]

perk = [
  {
    "name"=>"Free burrito",
    "description"=>"Free burrito for you!",
    "amount"=>100,
    "foodtruck_id"=>1
  },
  {
    "name"=>"Free Taco",
    "description"=>"Free taco for you!",
    "amount"=>200,
    "foodtruck_id"=>1
  },
  {
    "name"=>"Free Chow Mein",
    "description"=>"Free Choe Mein for you!",
    "amount"=>54,
    "foodtruck_id"=>3
  },
  ]

category = [
  {"name"=>"Hispanic"},
  {"name"=>"Asian"},
  {"name"=>"Western"},
  ]
