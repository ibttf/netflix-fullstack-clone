class MoviesController < ApplicationController
  
  def index
    render json: Movie.all
  end
  def show
    movie=Movie.find(params[:id])

    render json: movie, status: :ok
  end

  def create 
    movie = @current_user.movies.create!(movie_params)

    render json: movie, status: :created
  end

  def destroy
    movie=Movie.find(params[:id])
    movie.destroy
    head :no_content
  end

  
  def add_movie
    profile=Profile.find(@current_user.current_profile)
    movie=Movie.create(movieId: params[:movieId])
    profile.movies << Movie.last
    render json: profile, status: :ok
  end

  def remove_movie
    movie=Movie.find_by(movieId: params[:movieId])
    movie.destroy
    render json: profile, status: :ok
  end

  private

  def movie_params
    params.permit(:movieId)
  end



end