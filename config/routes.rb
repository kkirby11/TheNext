Rails.application.routes.draw do
  namespace :api do
    get 'users/index'
  end

  namespace :api do
    get 'users/update'
  end

  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/destroy'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
