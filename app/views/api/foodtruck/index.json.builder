json.array!(@foodtruck) do |foodtruck|
  json.partial!('pokemon', pokemon: pokemon, show_toys: false)
end
