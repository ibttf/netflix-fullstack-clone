Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create,:show]
  resources :profiles, only: [:index,:create, :show, :destroy]
  resources :movies, only: [:index, :create, :show, :destroy]
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"
  
  # Defines the root path route ("/")
  # root "articles#index"
end
