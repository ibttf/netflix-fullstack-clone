class Profile < ApplicationRecord
    belongs_to :user
    has_many :profile_movies
    has_many :movies, through: :profile_movies
    validates :tag, presence: true
end
