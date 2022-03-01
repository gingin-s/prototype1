Rails.application.routes.draw do
  root to: "notes#index"

  resources :notes, only: [:new, :create, :edit, :update] do
    resources :passages, only: :create
  end


end
