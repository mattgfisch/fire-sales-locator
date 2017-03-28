require_relative '../spec_helper'

describe Article do
  let(:article) { Article.new }
  let(:comment) { Comment.new }
  it 'has comments' do
    article.comments << comment
    expect(article.comments).to include(Comment)
  end
end
