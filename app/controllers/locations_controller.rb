require 'json'

post '/locations' do
  location = params[:search][:location]
  query = params[:search][:query]
  if request.xhr?
    return { location: location, query: query}.to_json
  end
end
