get '/animals' do
  @animals = Animal.all
  erb :'animals/index'
end

get '/animals/new' do
  erb :'animals/new', layout: false
end

get '/animals/:id' do
  @animal = Animal.find(params[:id])
  erb :'animals/show'
end

post '/animals' do
  new_animal = Animal.create(params[:animal])
  erb :"animals/_animal", layout: false, locals: {animal: new_animal}
end
