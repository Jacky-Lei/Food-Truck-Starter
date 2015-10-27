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
      "description"=>"Massive Burritos of love for the burrito lord in all of us! I have a MA in carne asada and specialize in mixing up the hottest sauces to give you that special kick you need. Support this dream and stay spicy, folks!" + "\n" + "It turns out you can go home again—if you’re a chef, anyway. Born in Houston and raised in San Antonio, native Texan and 2012 Rising Star Chef Rene Ortiz spent two decades traveling the world, expanding his horizons and cultivating his international culinary skills. But like any good Texan, Ortiz eventually returned home.
      Ortiz began his culinary career in Vancouver, as chef de cuisine for Robert Clark at Star Anise, named “Canada's Best Restaurant of the Year” in 1996 by Gourmet Magazine. Ortiz went on to work his way through the brasseries and bistros of Western Europe, absorbing and exploring various culinary styles and pantries. By 1998, Ortiz found himself once again stateside, though still far from home, working under luminaries like Daniel Boulud, Alain Ducasse, and Jean-Louis Pallidan in New York City.",
      "author_id"=>1,
      "end_date"=>"2015-12-1",
      "image"=>"http://dvenis.github.io/img/beef-burrito.jpg",
      "category_id"=>1,
      "funding_goal"=>2575
    },
    {
      "title"=>"Taco Monster",
      "description"=>"Forget El Pollo Loco, this is all about El Taco MONSTER-O! Chicken marinated in family recipe for generations will finally be shared its glory with the rest of the world if you support me! Chef Jose Garces has emerged as an enormous talent and one of the nation’s most gifted chefs and restaurateurs. His eponymous Garces Group operates restaurants in Philadelphia, Pa.; Chicago, Ill.; Scottsdale, Ariz.; Palm Springs, Calif.; and Atlantic City, N.J. In addition to his duties as chef-owner, Chef Garces is the author of a stunning cookbook, Latin Evolution (Lake Isle Press, September 2008), with a second, The Latin Road Home, to be published by Lake Isle in fall 2012. He is a 2009 winner of the James Beard Foundation’s prestigious “Best Chef, Mid-Atlantic” award and one of only eight chefs in the country to hold the prestigious title of Iron Chef. He regularly appears on the Food Network hit Iron Chef America, a role he earned after besting nine other competitors on The Next Iron Chef. In addition, Chef Garces is the owner of 40-acre Luna Farm in Bucks County, Pa., where he and his team grow much of the produce for his Philadelphia restaurants. He is also the proprietor of one of the nation’s best-loved food trucks, Guapos Tacos, which is available for private events and can often be found on the streets of his adopted hometown of Philadelphia.",
      "author_id"=>2,
      "end_date"=>"2016-2-14",
      "image"=>"http://memberfiles.freewebs.com/15/54/79265415/photos/undefined/chicken-tacos.jpg",
      "category_id"=>1,
      "funding_goal"=>1600
    },
    {
      "title"=>"SALSA Wars",
      "description"=>"So many salsas, so less time! Whatever you choose, our salsas and guacs make the HIP in chips! I love spreading the love and getting people together over a bowl of fresh salsa, hope you can bring this to life with me. Aarón Sánchez is chef and partner of Paloma in Stamford, Conn., and Johnny Sánchez, with locations in Baltimore and New Orleans, alongside friend and colleague John Besh. He is the co-star of Food Network’s hit series Chopped and the host of Cooking Channel's Emmy Award-nominated Taco Trip. He is also the host of two Spanish-language TV series on Fox Life: 3 Minutos con Aarón and Motochefs. Aarón’s passion, commitment and skills have placed him among the world's leading contemporary Latin chefs.
      Celebrated by critics and contemporaries alike, Aarón recently appeared at the White House as a guest chef and received the National Award at the Flavors of Passion Awards honoring the nation’s best Latin chefs. He has also starred on multiple Food Network shows, including Heat Seekers, Chefs vs. City, The Best Thing I Ever Ate, Best. Ever., The Best Thing I Ever Made and the first season of The Next Iron Chef.",
      "author_id"=>3,
      "end_date"=>"2016-9-2",
      "image"=>"http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2013/4/5/1/FNM_050113-50-Salsas-and-Guacamole-Cover_s4x3.jpg.rend.sni18col.landscape.jpeg",
      "category_id"=>1,
      "funding_goal"=>6325
    },
    {
      "title"=>"My Chow Mein Man",
      "description"=>"Whose needs a main man when you can have a CHOW MEIN MAN?! Nothing hits the spot like my chow mein, guaranteed. I've been stir frying up noodles and yums before it was cool.
      Chef John Yao has over 39 years of experience cooking Chinese cuisine. He is easily considered to be one of the top Szechuan chefs in the Bay Area. He has owned and operated four restaurants in Albany and Belmont, California.
      Chef John mastered Mandarin and Cantonese cuisines early on in his career. However, over time, his passion turned to the fiery chilis and spices of Szechuan cuisine, a style that he learned predominantly from the world renowned Master Chef and Culinary Teacher Zhongyi Liu. Chef John managed to coax Liu from the Grand Hotel in Beijing over a decade ago to assist him in re-launching his restaurant concept in Albany, California. Together they shared ideas and techniques and the outcome was a Szechuan inspired menu, prepared with time-honored technique using hand selected spices and chilis roasted in-house.",
      "author_id"=>4,
      "end_date"=>"2015-12-18",
      "image"=>"http://cdn.recipes100.com/v/7433722d75def5d533da8dd72dcf6cdb.jpg",
      "category_id"=>2,
      "funding_goal"=>200
    },
    {
      "title"=>"Rock & Sushi Roll",
      "description"=>"I should get sued for making such delicious sushi, but thanks to you guys, I'm gonna get to share it with everyone, right? Start me off with the initial capital and I promise you the sushi world will never be the same again.
      Peggi Ince-Whiting has been making sushi in Utah for over 30 years.  She is one of a handful of female chefs to work behind a sushi bar in Japan.  Peggi was trained by Sushi Master Inou at Hama Sushi in Tokyo.  After finishing her apprenticeship under Master Inou, Peggi returned to her native Utah to open her own restaurant, Ichiban Sushi.  Over the 20 years that Peggi owned and operated Ichiban she received many awards and acknowledgements for her talent from US publications such as Bon Appetite Magazine, Fine Cooking Magazine and Zagats.  She has also received notations in numerous Japanese publications.",
      "author_id"=>5,
      "end_date"=>"2016-1-2",
      "image"=>"http://www.singosushi.com/wp-content/uploads/2013/12/Image00002-2000x925.jpg",
      "category_id"=>2,
      "funding_goal"=>15000
    },
    {
      "title"=>"Paradise Falls",
      "description"=>"Pad thai or fish soup, whatever you support and whatever you love is paradise here. hef Thaworn was born and raised in the small fishing village of Thap-Sake, in Prachuapkirikhan province, Thailand. The family owned and operated a fleet of fishing boats , made fish sauce, and grew coconuts. Thap-Sake is famous for their fine coconuts and the restaurant uses coconut milk produced in Thap-Sake. The rich red soil and tropical setting produces an abundance of delicious, exotic fruit and vegetables. Everything from scorching hot Thai pik-kee-nu chilies to ultra flavorful pineapple and bananas, it's all there. With long sunny days and tropical rains this abundance is harvested year round. Papaya and other tropical fruit grow wild and delicate orchids thrive in the nearby teak forests gracing the mountain border between Thailand and Burma (just one or two kilometers away).
      Thaworn's uncle was a true gourmet and Thaworn would often accompany him on trips to the markets, and farms and even out into the jungle to collect exotic mushrooms, wild vegetables, herbs and spices. Thaworn's family home was right on the beach facing the Gulf of Thailand (with a large fresh water stream a little behind the house). Wonderful fish, crab, giant squid, and many varieties of shellfish were always on the table.
      Thaworn came to the United States in 1979 and apprenticed under another  uncle who had opened one of the first Thai restaurants in this country.  During that time Eraworn was a favorite of many top actors and actresses who were fond of visiting the kitchen and seeing how things are done.  Later,  Thaworn polished her craft in some of the top Thai restaurants in Los Angeles, including the highly regarded Chao Praya restaurant in Hollywood, Vim in L. A.,  and Thailandia in Burbank, California. ",
      "author_id"=>6,
      "end_date"=>"2015-12-22",
      "image"=>"http://drinks.seriouseats.com/images/2011/11/20111103padthai.jpg",
      "category_id"=>2,
      "funding_goal"=>7850
    },
    {
      "title"=>"Burger Burglar",
      "description"=>"You know the drill - meat, buns, cheese, and colorful crispy veggies put together in a package so good you'd steal it if that's the only thing you'd ever steal. Don't worry though, you won't have to if you support me!
      Like many of the chefs who stumble their way into the business, Terry Koval began his restaurant career at the age of 15, working as a dishwasher at John Paul’s Armadillo Oil Company in Greenville, South Carolina. Rather than head to culinary school after those classically sudsy beginnings, Koval looked west to San Francisco, in hopes like many teenagers, of becoming a skateboarder. And it was on the west coast that he had his first introduction to local, seasonal produce and farm-to-table cuisine.
      When the skateboarding career he hoped for didn’t work out, Koval came back to the South, refreshed and inspired by the west coast’s culinary prosperity. He worked his way up the Georgia culinary food chain to the position of executive sous chef under mentor Chef Gary Mennie at nationally acclaimed Canoe in Vinings. He later joined Concentrics Restaurants as the sous chef of Lobby at TWELVE and became executive chef of Room at TWELVE, which was awarded a three-star review from The Atlanta Journal-Constitutionunder his tenure.
      Koval eventually returned to his roots in sustainable cuisine with his expertly crafted, seasonal grass-fed burgers at Burger Burglar. It may be burgers, but Koval understands the importance of refined, fresh flavors, no matter what the vessel. As one of the 2012 Atlanta Rising Stars, he has big plans to return to the finer side of dining in the near future.
",
      "author_id"=>7,
      "end_date"=>"2015-12-21",
      "image"=>"http://aht.seriouseats.com/images/2012/04/20120427-bk-japan-ringo-burger-product-shot.jpg",
      "category_id"=>3,
      "funding_goal"=>11200
    },
    {
      "title"=>"Honey Fried",
      "description"=>"Who ever said saucy and sweet can't go together? Fresh, crispy, and tangy is what you're supporting here!
      Since making Raleigh her home, Ashley Christensen has sought to foster community through food, philanthropy and the stimulation of the city’s downtown neighborhood.
      Ashley began cooking while in college, throwing dinner parties for her friends and family. These intimate gatherings helped her recognize her passion for cooking and sharing food, and ultimately led to her first professional cooking job at the age of 21. Upon taking the position, she knew she had found her life’s work.
      After working in some of the Triangle’s top kitchens, Ashley opened a diner in 2007, which takes its name and décor from the building’s original tenant—one of downtown Raleigh’s first restaurants. The shotgun space offers an evolving chalkboard menu of comfort-food classics, re-imagined through a philosophy of locally grown, seasonal ingredients and French-influenced technique.",
      "author_id"=>8,
      "end_date"=>"2015-11-2",
      "image"=>"https://img.grouponcdn.com/seocms/hC6U4bVFGcecmw8i4FMn1Y/Plate-by-Plate-Fried-Chicken-at-Honey-Butter-Fried-Chicken-in-Avondale_600x390-600x390.jpeg",
      "category_id"=>3,
      "funding_goal"=>4550
    },
    {
      "title"=>"Mr. Porky",
      "description"=>"Nothing says 'leave me alone' better than greasy hands on a rack of ribs and a face spattered with BBQ sauce. There are bibs and forks for those who are social though. Our BBQ is Memphis BBQ. We helped put this city on the map as a culinary capital and BBQ haven. Locals don’t lie, and we’ve been voted the #1 BBQ joint in Memphis 22 times since Don Pelts fired up our first hickory and charcoal BBQ pit (more than 30 years ago) with one goal in mind: serve the absolute best BBQ possible.",
      "author_id"=>9,
      "end_date"=>"2016-6-18",
      "image"=>"http://creolecontessa.com/wp-content/uploads/2013/11/a81-139edited.jpg",
      "category_id"=>3,
      "funding_goal"=>3175
    },
    {
      "title"=>"Curry In A Hurry",
      "description"=>"We make it in a hurry for you so you can take your time enjoying it. All the spices of India couldn't combine to make a tastier dish to enjoy on a cool day. Celebrity Chef Maneet Chauhan's passion for all things culinary started at an extremely young age. Seemingly born with a ladle in her hand, she started her culinary journey in her homeland of India, where she graduated at the top of her class at the Welcomgroup Graduate School of Hotel Administration, India's top culinary and hotel management school. After interning at India's finest hotels and kitchens, including names like the Taj Group, Oberoi Hotels and Le Meridian, it was off to the U.S., where she attended The Culinary Institute of America and graduated with high honors, sweeping all awards in her class. After some valuable fine-dining field experience on the East Coast, it was time to conquer Chicago. This task began with her being the only woman to go up against 40 male chefs for an executive chef position. Once again successful, Chef Chauhan was ultimately the opening chef of Vermilion restaurant. As executive chef of Vermilion, she was at the helm of executing the Indian-Latin cuisine developed by Rohini Dey and her kitchen teams in New York and Chicago. With Chef Chauhan at the helm, the restaurant earned many accolades, including Chicago magazine's Best New Restaurant, Esquire's Restaurant of the Month and Wine Enthusiast's Best New Restaurant in the U.S. Vermilion then set its sights on New York City and launched an equally impressive outpost in the heart of Manhattan. Soon after its doors opened, Chef Chauhan was nominated as the Best Import to New York by Time Out magazine.",
      "author_id"=>10,
      "end_date"=>"2016-3-23",
      "image"=>"http://www.cava.net.au/wp-content/uploads/2013/08/curry.jpg",
      "category_id"=>4,
      "funding_goal"=>8000
    },
    {
      "title"=>"Flames Of Tandoori",
      "description"=>"Tandoori is a mix of tradition and perfection. My family has worked hard to uphold this heritage; we hope you join us. A native of Bombay, India, Vikram Sunderam began his career in 1985 when he joined the Taj Mahal Hotel group. During his training with the company, he worked at several of their properties, including Riverview Lodge where he was promoted to Head Chef. Sunderam received an Advanced Food Hygiene Certificate from Royal Borough of Kensington and Chelsea, London and prior to that he earned a Bachelors of Arts degree from Osmania University (Hyderabad) and Diploma in Hotel Administration and Food Technology from Sophia Polytechnic in Bombay. Before making the leap to Washington, Sunderam was at the award-winning Bombay Brasserie in London for 14 years, eight of which he served as the executive chef. During his tenure at Bombay Brasserie, Sunderam also gained experience cooking for large scale, high profile events. Sunderam joined Washington restaurateur Ashok Bajaj in December 2005 to open the140-seat Indian hot spot Rasika. The name Rasikais derived from Sanskrit meaning “flavors” and Chef Vikram Sunderam continues to please critics, celebrities and patrons with his authentic Indian fare with modern flair. His culinary artistry garnered him a nomination for “Best Chef, Mid-Atlantic” by James Beard Foundation in 2009, 2010, and 2012 and a “Chef of the Year” nomination by Restaurant Association of Metropolitan Washington in 2009 and 2010. In 2007, Tom Sietsema of The Washington Post awarded Rasikawith three and a half stars, calling Rasika “one of the most exciting Indian restaurants on the East Coast.” Among its many accolades, Rasika has gone on to receive “Four Stars” from The Washington Post in the 2009 and 2010 Dining Guide. The restaurant was awarded the number eight spot of the 100 Best Restaurants in Washingtonian magazine in 2010. Sunderam is also collaborating with Bajaj on the recipes for Rasika’s new line of Indian sauces, currently for sale at the restaurant as well as Giant and Whole Foods. He currently resides in McLean, Virginia with his wife and two children. When he is not in the kitchen cooking, Vikram can be found enjoying sports such as football, cricket, hockey, table tennis and basketball or immersed in a good book.",
      "author_id"=>11,
      "end_date"=>"2016-2-15",
      "image"=>"http://indiagrilltampa.com/wp-content/themes/indiagrill/thumb.php?src=http://indiagrilltampa.com/wp-content/uploads/2011/01/chicken.jpg&h=250&w=450&zc=1&q=80&bid=1",
      "category_id"=>4,
      "funding_goal"=>13575
    },
    {
      "title"=>"Get A Pizza This",
      "description"=>"5 cheeses, 8 sauces, 23.5 toppings, ALL ready to induce an immediate food comma. Let's get this pizza on the road! Adam founded the restaurant corresponding to this truck in 2003 to document his own exploration of the NYC pizza scene and to help others find their own path to perfect pizza. In 2005 he co-founded A Hamburger Today. Both were enormously influential and served as templates for food-blogging in general. In late 2006 the as-yet-unlaunched food website Serious Eats bought both those sites from Adam and brought him on board to serve as SE‘s founding editor, a position he held until early 2011. During that time he created the voice and tone of the site and helped guide it to two James Beard Awards in 2010.",
      "author_id"=>1,
      "end_date"=>"2015-12-25",
      "image"=>"http://www.caputomarkets.com/Content/Images/uploaded/Home%20Page/Blog/pizza.jpg",
      "category_id"=>5,
      "funding_goal"=>9025
    },
    {
      "title"=>"Mama Mia",
      "description"=>"Such good family home-cooking that would make moms proud. And hungry. Sergio Mitrotti has always exhibited an adventurous spirit, first as an avid sailor and scuba diver in the Mediterranean, then as a successful graphic artist in his native Italy, then as a proprietor of a high-end clothing store in Beverly Hills.
      But for this Renaissance man, food has always been the most natural of all avenues for exploration.",
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
      "backer_id"=>6,
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
      "backer_id"=>7,
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
      "amount"=>3500,
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
      "backer_id"=>8,
    },

    ]


  donation_two = [
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
      "amount"=>25,
      "foodtruck_id"=>1,
      "backer_id"=>5,
      "perk_id"=>1,
    },
    {
      "amount"=>200,
      "foodtruck_id"=>1,
      "backer_id"=>6,
      "perk_id"=>2,
    },
    {
      "amount"=>25,
      "foodtruck_id"=>1,
      "backer_id"=>7,
      "perk_id"=>1,
    },
    {
      "amount"=>200,
      "foodtruck_id"=>1,
      "backer_id"=>8,
      "perk_id"=>2,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>11,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>2,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>3,
    },
    {
      "amount"=>20,
      "foodtruck_id"=>2,
      "backer_id"=>4,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>5,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>6,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>7,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>8,

    },
    {
      "amount"=>2,
      "foodtruck_id"=>2,
      "backer_id"=>9,
    },

    {
      "amount"=>50,
      "foodtruck_id"=>3,
      "backer_id"=>2,
      "perk_id"=>4,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>3,
      "backer_id"=>3,
      "perk_id"=>4,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>3,
      "backer_id"=>2,
      "perk_id"=>4,
    },
    {
      "amount"=>2,
      "foodtruck_id"=>3,
      "backer_id"=>4,

    },
    {
      "amount"=>5,
      "foodtruck_id"=>3,
      "backer_id"=>5,

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
      "foodtruck_id"=>4,
      "backer_id"=>6,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>7,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>8,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>9,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>10,
    },
    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>11,
    },

    {
      "amount"=>5,
      "foodtruck_id"=>4,
      "backer_id"=>2,
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
      "amount"=>575,
      "foodtruck_id"=>6,
      "backer_id"=>10,
    },
    {
      "amount"=>575,
      "foodtruck_id"=>6,
      "backer_id"=>9,
    },
    {
      "amount"=>575,
      "foodtruck_id"=>6,
      "backer_id"=>3,
    },
    {
      "amount"=>575,
      "foodtruck_id"=>6,
      "backer_id"=>4,
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
      "amount"=>50,
      "foodtruck_id"=>8,
      "backer_id"=>11,
      "perk_id"=>10,
    },
    {
      "amount"=>50,
      "foodtruck_id"=>8,
      "backer_id"=>2,
      "perk_id"=>10,
    },
    {
      "amount"=>7,
      "foodtruck_id"=>8,
      "backer_id"=>3,

    },
    {
      "amount"=>3,
      "foodtruck_id"=>8,
      "backer_id"=>4,

    },
    {
      "amount"=>200,
      "foodtruck_id"=>9,
      "backer_id"=>5,
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
      "amount"=>70,
      "foodtruck_id"=>10,
      "backer_id"=>4,

    },
    {
      "amount"=>50,
      "foodtruck_id"=>12,
      "backer_id"=>3,

    },
    {
      "amount"=>50,
      "foodtruck_id"=>12,
      "backer_id"=>4,

    },
    {
      "amount"=>50,
      "foodtruck_id"=>12,
      "backer_id"=>5,

    },
    {
      "amount"=>30,
      "foodtruck_id"=>13,
      "backer_id"=>2,
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
      "username"=>"LetzTacoBout_It?",
      "password"=>"password"
    },
    {
      "username"=>"SauceBomb",
      "password"=>"password"
    },
    {
      "username"=>"ChowFu",
      "password"=>"password"
    },
    {
      "username"=>"FreshFishies",
      "password"=>"password"
    },
    {
      "username"=>"BigOrange",
      "password"=>"password"
    },
    {
      "username"=>"TrueAndSimple",
      "password"=>"password"
    },
    {
      "username"=>"MunchCrunch",
      "password"=>"password"
    },
    {
      "username"=>"HandsAreForFood",
      "password"=>"password"
    },
    {
      "username"=>"KeepUpTheHeat",
      "password"=>"password"
    },
    {
      "username"=>"SmokinRed",
      "password"=>"password"
    },
    {
      "username"=>"OutToFeed",
      "password"=>"password"
    },
    ]

  User.create!(user)
  Foodtruck.create!(foodtruck)
  Donation.create!(donation)
  Donation.create!(donation_two)
  Perk.create!(perk)
  Category.create!(category)


end
