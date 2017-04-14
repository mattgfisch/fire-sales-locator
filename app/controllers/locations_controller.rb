require 'json'

post '/locations' do
  location = params[:search][:location]
  query = params[:search][:query]
  radius = miles_to_meters(params[:search][:radius].to_f)
  zoom = find_zoom(radius)
  if request.xhr?
    return { location: location, query: query, radius: radius, zoom: zoom}.to_json
  end
end
