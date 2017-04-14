post '/locations' do
  location = params[:search][:location]
  if request.xhr?
    location
  end
  nil
end
