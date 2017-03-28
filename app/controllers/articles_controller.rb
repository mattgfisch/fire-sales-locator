get '/articles' do
  @articles = Article.all
  erb :'articles/index'
end

get '/articles/new' do
  erb :'articles/new'
end

post '/articles' do
  @article = Article.create(params['article'])
  redirect to '/articles'
end

get '/articles/:id' do # '/articles/:id'
  @article = Article.find(params[:id])
  erb :'articles/show'
end

get '/articles/:id/edit' do
  @article = Article.find(params[:id])
  erb :'articles/edit'
end

put '/articles/:id' do
  @article = Article.find(params[:id])
  @article.title = params[:title]
  @article.body = params[:body]
  @article.save
  erb :'articles/show'
end
