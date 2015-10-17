Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resources :foodtrucks, only: [:create, :index, :show]
    resources :donations, only: [:create, :index]
    resources :perks, only: [:create, :index]
  end
end
