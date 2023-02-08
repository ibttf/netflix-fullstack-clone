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
  
  def show_movies
    profile=Profile.find(@current_user.current_profile)
    render json: profile.movies, status: :ok
  end

  def add_movie
      profile=Profile.find(@current_user.current_profile)
      movie=Movie.create!(params[:movieId])
      profile.movies << movie
      render json: profile, status: :ok
  end

  def remove_movie
      movie=Movie.find(params[:movieId])
      movie.destroy
      render json: profile, status: :ok
  end
  
  private

  def profile_params
    params.permit(:tag)
  end


end