class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_friend, only: [:show]

  def index
    render json: Friend.all 

  end

  def show
    render json: @friend
  end

  def update
    current_user.close_friends << params[:id].to_i
    current_user.save
  end

  def close_friends
    
  end


  private

  def set_friend
    @friend = Friend.find(params[:id])
  end

  def friend_params
    params.require(:friend).permit(:name, :avatar, :post)
  end 
end
