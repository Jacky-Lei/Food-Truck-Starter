json.extract! category, :name, :id
json.foodtrucks do
  json.array!(category.foodtrucks) do |foodtruck|
    json.partial!('api/foodtrucks/foodtruck', foodtruck: foodtruck)
  end
end
