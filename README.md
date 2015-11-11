# Food Truck Starter

[Application Link][link] - www.foodtruckstarter.space

[link]: foodtruckstarter.space

## Overview

Food Truck Starter is a web application inspired by KickStarter for food truck enthusiasts.

![indexScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1447183770/FTindex_igucev.png)

Built on Ruby on Rails, Javascript, and React, this app allows users to:

* Sign Up / Log In / Log Out / Log In As Guest
* Filter Food Trucks By Category For Viewing
* Endorse Food Trucks By Selecting Dollar Amount Or Specific Perk (Reward)
* Create Food Trucks With Images, Funding Goal, And Perks
```
#### Signing Up / Logging In
* User model uses BCrypt and SecureRandom to generate password digest and session tokens
* Guest log in handler uses AJAX to submit post request with default username and password
```
#### Filtering Food Trucks
* jBuilder optimized to eager load all food trucks and then filter by category_id as a foreign key for quick response
* React Flux architecture makes for easy-to-follow data flow and debugging between category, food truck, and other components
```
#### Endorsing Food Trucks

![showScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1447184132/FTshow_vdjybq.png)

* Finalizing a contribution (donation) will update its associated objects in the database as well as its corresponding component in the current page
* Custom confirmation and Bootstrap progress bar components respond to user interaction through React Flux loop
```
#### Creating Food Trucks

![createScreenshot]
(http://res.cloudinary.com/akantoword/image/upload/v1447183767/FTcreate_xduw87.png)

* The flexible perk form is built within a nested component structure, which allows users to add as many perks as they desire
* Incorporates Cloudinary API to upload images
* Control flow logic maximizes alert component to handle success and error messages
* Restful architecture bundles all input data into Food Truck resource
```
