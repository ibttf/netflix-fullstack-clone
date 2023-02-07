class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    profile=Profile.create(tag: "User 1")
    user.profiles << profile
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def show_profiles
    render json: @current_user.profiles, status: :ok 
  end

  def get_current_profile
    render json: @current_user.current_profile, status: :ok
  end

  def select_profile
    @current_user.update(current_profile: params[:profileId])
    render json: @current_user, status: :ok
  end

  def add_profile
    profile=Profile.create(tag:params[:profileName])
    @current_user.profiles << profile
    render json: profile, status: :created
  end


  # def submit_essay
  #   if (@current_user.points < params[:length].to_i)
  #     render json: {error: "You Don't Have Enough Points!"}, status: :unprocessable_entity
  #   else
  #     @current_user.update(points: @current_user.points-params[:length].to_i)
  #     render json: @current_user
  #   end
    
  # end

  # def submit_review
  #   @current_user.update(points: @current_user.points+params[:length].to_i)
  #   render json: @current_user
  # end



  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :user)
  end

end