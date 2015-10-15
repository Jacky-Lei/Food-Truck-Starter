json.array!(@foodtruck) do |foodtruck|
  json.partial!('foodtruck', foodtruck: foodtruck)
end
