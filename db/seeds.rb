require 'faker'

100.times do
  Animal.create(name: Faker::Superhero.name, species: Faker::Pokemon.name)
end
