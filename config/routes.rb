Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :show]
  resources :profiles, only: [:index,:create, :show, :destroy]
  resources :movies, only: [:index, :create, :show, :destroy]
  
  get "/me", to: "users#show"
  get "/show-profiles", to: "users#show_profiles"
  get "/get-current-profile", to: "users#get_current_profile"
  get "/show-profiles-except-current", to: "users#show_profiles_except_current"
  get"/show-movies", to: "#profiles#show_movies"

  patch "/select-profile", to: "users#select_profile"
  patch "/update-profile", to: "profiles#update_profile"
  patch "/remove-movie", to: "profiles#remove_movie"
  patch "/add-movie", to: "profiles#add_movie"

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post "/add-profile", to: "users#add_profile"


  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"
end
