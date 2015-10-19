json.array!(@category) do |category|
  json.partial!('category', category: category)
end
