# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


ActiveRecord::Base.transaction do
  foodtruck = [
    {
      "title"=>"Burrito Attack",
      "description"=>"Massive Burritos of love for the burrito lord in all of us! I have a MA in carne asada and specialize in mixing up the hottest sauces to give you that special kick you need. Support this dream and stay spicy, folks!",
      "author_id"=>1,
      "end_date"=>"2015-12-1",
      "image"=>"http://dvenis.github.io/img/beef-burrito.jpg",
      "category_id"=>1,
      "funding_goal"=>2575
    },
    {
      "title"=>"Taco Monster",
      "description"=>"Forget El Pollo Loco, this is all about El Taco MONSTER-O! Chicken marinated in family recipe for generations will finally be shared its glory with the rest of the world if you support me!",
      "author_id"=>2,
      "end_date"=>"2016-2-14",
      "image"=>"http://memberfiles.freewebs.com/15/54/79265415/photos/undefined/chicken-tacos.jpg",
      "category_id"=>1,
      "funding_goal"=>1600
    },
    {
      "title"=>"SALSA Wars",
      "description"=>"So many salsas, so less time! Whatever you choose, our salsas and guacs make the HIP in chips! I love spreading the love and getting people together over a bowl of fresh salsa, hope you can bring this to life with me.",
      "author_id"=>3,
      "end_date"=>"2016-9-2",
      "image"=>"http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2013/4/5/1/FNM_050113-50-Salsas-and-Guacamole-Cover_s4x3.jpg.rend.sni18col.landscape.jpeg",
      "category_id"=>1,
      "funding_goal"=>6325
    },
    {
      "title"=>"My Chow Mein Man",
      "description"=>"Whose needs a main man when you can have a CHOW MEIN MAN?! Nothing hits the spot like my chow mein, guaranteed. I've been stir frying up noodles and yums before it was cool.",
      "author_id"=>4,
      "end_date"=>"2015-12-18",
      "image"=>"http://cdn.recipes100.com/v/7433722d75def5d533da8dd72dcf6cdb.jpg",
      "category_id"=>2,
      "funding_goal"=>200
    },
    {
      "title"=>"Rock and Sushi Roll",
      "description"=>"I should get sued for making such delicious sushi, but thanks to you guys, I'm gonna get to share it with everyone, right? Start me off with the initial capital and I promise you the sushi world will never be the same again.",
      "author_id"=>5,
      "end_date"=>"2016-1-2",
      "image"=>"http://www.singosushi.com/wp-content/uploads/2013/12/Image00002-2000x925.jpg",
      "category_id"=>2,
      "funding_goal"=>15000
    },
    {
      "title"=>"Paradise Falls",
      "description"=>"Pad thai or fish soup, whatever you support and whatever you love is paradise here.",
      "author_id"=>6,
      "end_date"=>"2015-12-22",
      "image"=>"http://drinks.seriouseats.com/images/2011/11/20111103padthai.jpg",
      "category_id"=>2,
      "funding_goal"=>7850
    },
    {
      "title"=>"Burger Burglar",
      "description"=>"You know the drill - meat, buns, cheese, and colorful crispy veggies put together in a package so good you'd steal it if that's the only thing you'd ever steal. Don't worry though, you won't have to if you support me!",
      "author_id"=>7,
      "end_date"=>"2015-12-21",
      "image"=>"http://aht.seriouseats.com/images/2012/04/20120427-bk-japan-ringo-burger-product-shot.jpg",
      "category_id"=>3,
      "funding_goal"=>11200
    },
    {
      "title"=>"Honey Fried",
      "description"=>"Who ever said saucy and sweet can't go together? Fresh, crispy, and tangy is what you're supporting here!",
      "author_id"=>8,
      "end_date"=>"2015-11-2",
      "image"=>"https://img.grouponcdn.com/seocms/hC6U4bVFGcecmw8i4FMn1Y/Plate-by-Plate-Fried-Chicken-at-Honey-Butter-Fried-Chicken-in-Avondale_600x390-600x390.jpeg",
      "category_id"=>3,
      "funding_goal"=>4550
    },
    {
      "title"=>"Mr. Porky",
      "description"=>"Nothing says 'leave me alone' better than greasy hands on a rack of ribs and a face spattered with BBQ sauce. There are bibs and forks for those who are social though.",
      "author_id"=>9,
      "end_date"=>"2016-6-18",
      "image"=>"http://creolecontessa.com/wp-content/uploads/2013/11/a81-139edited.jpg",
      "category_id"=>3,
      "funding_goal"=>3175
    },
    {
      "title"=>"Curry In A Hurry",
      "description"=>"We make it in a hurry for you so you can take your time enjoying it. All the spices of India couldn't combine to make a tastier dish to enjoy on a cool day.",
      "author_id"=>10,
      "end_date"=>"2016-3-23",
      "image"=>"http://www.cava.net.au/wp-content/uploads/2013/08/curry.jpg",
      "category_id"=>4,
      "funding_goal"=>8000
    },
    {
      "title"=>"Flames Of Tandoori",
      "description"=>"Tandoori is a mix of tradition and perfection. My family has worked hard to uphold this heritage; we hope you join us.",
      "author_id"=>11,
      "end_date"=>"2016-2-15",
      "image"=>"http://indiagrilltampa.com/wp-content/themes/indiagrill/thumb.php?src=http://indiagrilltampa.com/wp-content/uploads/2011/01/chicken.jpg&h=250&w=450&zc=1&q=80&bid=1",
      "category_id"=>4,
      "funding_goal"=>13575
    },
    {
      "title"=>"Get A Pizza This",
      "description"=>"5 cheeses, 8 sauces, 23.5 toppings, ALL ready to induce an immediate food comma. Let's get this pizza on the road!",
      "author_id"=>1,
      "end_date"=>"2015-12-25",
      "image"=>"http://www.caputomarkets.com/Content/Images/uploaded/Home%20Page/Blog/pizza.jpg",
      "category_id"=>5,
      "funding_goal"=>9025
    },
    {
      "title"=>"Mama Mia",
      "description"=>"Such good family home-cooking that would make moms proud. And hungry.",
      "author_id"=>12,
      "end_date"=>"2016-5-21",
      "image"=>"http://cdn2.norecipes.com/wp-content/uploads/2012/10/spaghetti-recipe-5.jpg?00ef1d",
      "category_id"=>5,
      "funding_goal"=>750
    },
    ]

  donation = [
    {
      "amount"=>25,
      "foodtruck_id"=>1,
      "backer_id"=>3,
      "perk_id"=>1,
    },
    {
      "amount"=>200,
      "foodtruck_id"=>1,
      "backer_id"=>4,
      "perk_id"=>2,
    },
    {
      "amount"=>20,
      "foodtruck_id"=>2,
      "backer_id"=>1,
      "perk_id"=>3,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>3,
      "backer_id"=>2,
      "perk_id"=>4,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>5,
    },
    {
      "amount"=>400,
      "foodtruck_id"=>5,
      "backer_id"=>6,
      "perk_id"=>5,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>5,
      "backer_id"=>8,
      "perk_id"=>6,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>5,
      "backer_id"=>11,
      "perk_id"=>7,
    },
    {
      "amount"=>575,
      "foodtruck_id"=>6,
      "backer_id"=>8,
    },
    {
      "amount"=>25,
      "foodtruck_id"=>7,
      "backer_id"=>9,
      "perk_id"=>9,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>8,
      "backer_id"=>10,
      "perk_id"=>10,
    },
    {
      "amount"=>200,
      "foodtruck_id"=>9,
      "backer_id"=>1,
      "perk_id"=>11,
    },
    {
      "amount"=>55,
      "foodtruck_id"=>9,
      "backer_id"=>7,
      "perk_id"=>12,
    },
    {
      "amount"=>75,
      "foodtruck_id"=>10,
      "backer_id"=>13,
    },
    {
      "amount"=>75,
      "foodtruck_id"=>12,
      "backer_id"=>10,
      "perk_id"=>14,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>12,
      "backer_id"=>11,
      "perk_id"=>15,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>12,
      "backer_id"=>11,
      "perk_id"=>16,
    },



    {
      "amount"=>200,
      "foodtruck_id"=>1,
      "backer_id"=>13,
    },
    {
      "amount"=>500,
      "foodtruck_id"=>2,
      "backer_id"=>12,

    },
    {
      "amount"=>4000,
      "foodtruck_id"=>3,
      "backer_id"=>11,

    },
    {
      "amount"=>50,
      "foodtruck_id"=>4,
      "backer_id"=>10,
    },
    {
      "amount"=>3000,
      "foodtruck_id"=>5,
      "backer_id"=>9,
    },
    {
      "amount"=>1000,
      "foodtruck_id"=>6,
      "backer_id"=>8,

    },
    {
      "amount"=>2000,
      "foodtruck_id"=>7,
      "backer_id"=>7,

    },
    {
      "amount"=>3500,
      "foodtruck_id"=>8,
      "backer_id"=>6,
    },
    {
      "amount"=>200,
      "foodtruck_id"=>9,
      "backer_id"=>5,
    },
    {
      "amount"=>7000,
      "foodtruck_id"=>10,
      "backer_id"=>4,

    },
    {
      "amount"=>5000,
      "foodtruck_id"=>12,
      "backer_id"=>3,

    },
    {
      "amount"=>350,
      "foodtruck_id"=>13,
      "backer_id"=>1,
    },

    ]

  perk = [
    {
      "name"=>"Free Burrito",
      "description"=>"Free burrito for you!",
      "amount"=>25,
      "foodtruck_id"=>1
    },
    {
      "name"=>"Burrito With Extra Meat",
      "description"=>"Burrito with extra meat and a pound of uncooked carne goodness for you to take home!",
      "amount"=>200,
      "foodtruck_id"=>1
    },
    {
      "name"=>"Free Taco",
      "description"=>"Free taco for you!",
      "amount"=>20,
      "foodtruck_id"=>2
    },
    {
      "name"=>"Secret Salsa",
      "description"=>"Take a can of secret salsa for home!",
      "amount"=>50,
      "foodtruck_id"=>3
    },
    {
      "name"=>"Guac Party!",
      "description"=>"We'll host a guac party catering up to 50 guests and provide chips too!",
      "amount"=>400,
      "foodtruck_id"=>3
    },
    {
      "name"=>"Free Chow Mein",
      "description"=>"Free Chow Mein for you!",
      "amount"=>5,
      "foodtruck_id"=>4
    },
    {
      "name"=>"Free Sushi",
      "description"=>"Free california rolls for you!",
      "amount"=>50,
      "foodtruck_id"=>5
    },
    {
      "name"=>"Sashimi Platter",
      "description"=>"So much sashimi your taste buds will be swimmin'!",
      "amount"=>575,
      "foodtruck_id"=>5
    },
    {
      "name"=>"Yummy Pad Thai",
      "description"=>"Complimentary Pad Thai for you!",
      "amount"=>25,
      "foodtruck_id"=>6
    },
    {
      "name"=>"Picked Burger",
      "description"=>"Sounds strange until you have a bite.",
      "amount"=>50,
      "foodtruck_id"=>7
    },
    {
      "name"=>"Burger Bun",
      "description"=>"2 burgers within a burger!",
      "amount"=>200,
      "foodtruck_id"=>7
    },
    {
      "name"=>"Chicken Fingers",
      "description"=>"Free chicken fingers for you!",
      "amount"=>55,
      "foodtruck_id"=>8
    },
    {
      "name"=>"Free Rack",
      "description"=>"Free rack of ribs for you!",
      "amount"=>75,
      "foodtruck_id"=>9
    },
    {
      "name"=>"Free Curry",
      "description"=>"Free curry for you!",
      "amount"=>75,
      "foodtruck_id"=>10
    },
    {
      "name"=>"Free Pizza",
      "description"=>"Free 18 inch pizza for you!",
      "amount"=>50,
      "foodtruck_id"=>12
    },
    {
      "name"=>"Free Spaghetti",
      "description"=>"Free spaghetti for you!",
      "amount"=>50,
      "foodtruck_id"=>13
    },
    ]

  category = [
    {
      "name"=>"Hispanic"
    },
    {
      "name"=>"Asian"
    },
    {
      "name"=>"American"
    },
    {
      "name"=>"Indian"
    },
    {
      "name"=>"European"
    },
    ]

  user = [
    {
      "username"=>"Guest",
      "password"=>"password"
    },
    {
      "username"=>"Guest1",
      "password"=>"password"
    },
    {
      "username"=>"Guest2",
      "password"=>"password"
    },
    {
      "username"=>"Guest3",
      "password"=>"password"
    },
    {
      "username"=>"Guest4",
      "password"=>"password"
    },
    {
      "username"=>"Guest5",
      "password"=>"password"
    },
    {
      "username"=>"Guest6",
      "password"=>"password"
    },
    {
      "username"=>"Guest7",
      "password"=>"password"
    },
    {
      "username"=>"Guest8",
      "password"=>"password"
    },
    {
      "username"=>"Guest9",
      "password"=>"password"
    },
    {
      "username"=>"Guest10",
      "password"=>"password"
    },
    {
      "username"=>"Guest11",
      "password"=>"password"
    },
    ]

  User.create!(user)
  Foodtruck.create!(foodtruck)
  Donation.create!(donation)
  Perk.create!(perk)
  Category.create!(category)


end
