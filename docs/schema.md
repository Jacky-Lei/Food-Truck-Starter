# Schema Information

## foodtrucks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
backer_id   | integer   | not null, foreign key (references users), indexed
end_date    | date      | not null
image       | string    | default: http://images.clipartpanda.com/food-delivery-truck-clipart-yTo8MzjTE.jpeg
category_id | integer   | not null, foreign key (references categories), indexed
funding     | fixnum    | not null

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
foodtruck_id| integer   | not null, foreign key (references users), indexed
name        | string    | not null
