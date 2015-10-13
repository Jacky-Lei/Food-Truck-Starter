# Schema Information

## foodtrucks (migrated)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
end_date    | date      | not null
image       | string    | default: http://images.clipartpanda.com/food-delivery-truck-clipart-yTo8MzjTE.jpeg
category_id | integer   | not null, foreign key (references categories), indexed
funding_goal| integer    | not null

## donations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
amount          | integer   | not null
foodtruck_id    | integer   | not null, foreign key (references foodtruck), indexed
backer_id       | integer   | not null, foreign key (references backer), indexed
perk_id         | integer   |


## perks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | text      | not null
amount          | integer   | not null
foodtruck_id    | integer   | not null, not null, foreign key (references foodtruck), indexed

foodtruck id just for when perk is created, otherwise it's brought through the donation

## users (migrated)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
