class Movie < ApplicationRecord
    has_many :profile_movies
    has_many :profiles, through: :profile_movies
    validates :movieId, presence: true, uniqueness: true
end
