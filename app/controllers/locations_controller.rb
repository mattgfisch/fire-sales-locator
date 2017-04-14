require 'json'

post '/locations' do
  location = params[:search][:location]
  query = params[:search][:query]
  radius = miles_to_meters(params[:search][:radius].to_f)
  if request.xhr?
    return { location: location, query: query, radius: radius}.to_json
  end
end
