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

ActiveRecord::Schema.define(version: 20180214222026) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classicdrinks", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.string "preparation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "classicingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "classicmeasures", force: :cascade do |t|
    t.string "unit"
    t.integer "amount"
    t.integer "ingredient_id"
    t.integer "drink_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "drinks", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.string "ingredient1"
    t.string "ingredient2"
    t.string "ingredient3"
    t.string "ingredient4"
    t.string "ingredient5"
    t.string "garnish"
    t.string "glass"
    t.string "instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
