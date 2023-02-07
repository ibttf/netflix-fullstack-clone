class ProfilesController < ApplicationController
  
  def index
    render json: Profile.all
  end

  def show
    profile=Profile.find(params[:id])

    render json: profile, status: :ok
  end

  def create 
    profile = @current_user.profiles.create!(profile_params)
    render json: profile, status: :created
  end

  def destroy
    profile=Profile.find(params[:id])
    profile.destroy
    head :no_content
  end

  def update_profile
    profile=Profile.find(params[:id])
    profile.update(tag: params[:profileName])
    render json: profile, status: :created
  end
  

  private

  def profile_params
    params.permit(:tag)
  end


end