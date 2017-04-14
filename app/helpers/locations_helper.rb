def miles_to_meters(miles)
  miles * 1609.34
end

def find_zoom(radius)
  givenDiameter = radius * 2
  mapDiameter = 40075160
  zoom = 0
  loop do
    if mapDiameter > givenDiameter
      mapDiameter = mapDiameter / 2;
      zoom += 1
    else
      zoom -= 1
      break
    end
  end
  zoom
end
