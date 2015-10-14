# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151014175435) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "donations", force: :cascade do |t|
    t.integer  "amount",       null: false
    t.integer  "foodtruck_id", null: false
    t.integer  "backer_id",    null: false
    t.integer  "perk_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "donations", ["backer_id"], name: "index_donations_on_backer_id", using: :btree
  add_index "donations", ["foodtruck_id"], name: "index_donations_on_foodtruck_id", using: :btree

  create_table "foodtrucks", force: :cascade do |t|
    t.string   "title",                                                                                              null: false
    t.text     "description",                                                                                        null: false
    t.string   "author_id",                                                                                          null: false
    t.date     "end_date",                                                                                           null: false
    t.string   "image",        default: "http://images.clipartpanda.com/food-delivery-truck-clipart-yTo8MzjTE.jpeg"
    t.integer  "category_id",                                                                                        null: false
    t.integer  "funding_goal",                                                                                       null: false
    t.datetime "created_at",                                                                                         null: false
    t.datetime "updated_at",                                                                                         null: false
  end

  add_index "foodtrucks", ["author_id"], name: "index_foodtrucks_on_author_id", using: :btree
  add_index "foodtrucks", ["category_id"], name: "index_foodtrucks_on_category_id", using: :btree

  create_table "perks", force: :cascade do |t|
    t.string   "name",         null: false
    t.text     "description",  null: false
    t.integer  "amount",       null: false
    t.integer  "foodtruck_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "perks", ["foodtruck_id"], name: "index_perks_on_foodtruck_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
