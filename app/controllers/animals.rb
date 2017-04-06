get '/animals' do
  @animals = Animal.all
  erb :'animals/index'
end

get '/animals/new' do
  # @animal = Animal.new
  erb :'animals/new'
end

get '/animals/:id' do
  @animal = Animal.find(params[:id])
  erb :'animals/show'
end

post '/animals' do
  new_animal = Animal.create(params[:animal])
  redirect to "/animals/#{new_animal.id}"
end
