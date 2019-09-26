Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :friends, only: [:index, :update, :show]

    # get "close_friends", to "friends#close_friends" x

  end
end
