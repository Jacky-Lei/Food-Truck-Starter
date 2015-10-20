json.array!(@perk) do |perk|
  json.partial!('perk', perk: perk)
end
