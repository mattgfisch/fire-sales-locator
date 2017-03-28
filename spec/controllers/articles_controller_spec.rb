require_relative '../spec_helper'

describe 'Articles Controller' do
  describe "index" do
    before(:each) do
      get '/articles'
    end
    it 'sends HTML for the landing page header' do
      expect(last_response.body).to include('<h1>Article Town</h1>')
    end
    it 'responds with a status of 200' do
      expect(last_response.status).to eq(200)
    end
  end
end
