get '/animals' do
  @animals = Animal.all
  erb :'animals/index'
end
