class User < ApplicationRecord
    has_and_belongs_to_many :movies
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
