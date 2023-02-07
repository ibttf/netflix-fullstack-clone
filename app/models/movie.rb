class Movie < ApplicationRecord
    has_many :profile_movies
    has_many :profiles, through: :profile_movies
    validates :movie_id, presence: true
end
