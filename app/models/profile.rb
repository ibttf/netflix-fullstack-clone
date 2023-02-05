class Profile < ApplicationRecord
    belongs_to :user
    belongs_to :movie
    validates :tag, presence: true
end
