Rails.application.routes.draw do
  resources :categories
  resources :perks
  resources :donations
  root to: 'static_pages#root'
  resource :session
  resources :users
  resources :foodtrucks

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resources :foodtrucks, only: [:create, :index, :show]
  end
end
