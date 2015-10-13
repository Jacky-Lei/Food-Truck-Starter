# Schema Information

## foodtrucks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
end_date    | date      | not null
image       | string    | default: http://images.clipartpanda.com/food-delivery-truck-clipart-yTo8MzjTE.jpeg
category_id | integer   | not null, foreign key (references categories), indexed
funding_goal| fixnum    | not null

## donations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
amount_pledged  | integer   | not null
foodtruck_id    | integer   | not null, indexed, unique
backer_id       | integer   | not null, indexed, unique
perk_id         | integer   | unique


## perks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | text      | not null
amount_pledged  | integer   | not null
foodtruck_id    | integer   | not null, indexed, unique

foodtruck id just for when perk is created, otherwise it's brought through the donation

## users
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
