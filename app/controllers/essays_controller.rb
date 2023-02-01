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

  
  # def unreviewed
  #   render json: @current_user.essays.where(is_reviewed: nil ), status: :ok 
  # end

  # def reviewed
  #   render json: @current_user.essays.where(is_reviewed:true), status: :ok 
  # end

  # def reviewable
  #   unreviewed_essays=Essay.all.where(is_reviewed: nil)
  #   render json: unreviewed_essays.where.not(user_id:@current_user.id).sample(5), status: :ok
  # end

  # def current
  #   render json: Essay.find(params[:id])
  # end


  # def submit_review
  #   essay=Essay.find(params[:id])
  #   essay.update(essay_review_params)
  #   essay.update(reviewer_id: @current_user.id)
  #   render json: essay

  # end

  private

  def movies_params
    params.permit(:movie_id)
  end


end