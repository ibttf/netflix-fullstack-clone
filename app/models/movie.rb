class Movie < ApplicationRecord
    has_many :profiles
    has_many :users, through: :profiles
    validates :movie_id, presence: true
end
