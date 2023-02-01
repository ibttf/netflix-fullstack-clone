class MovieSerializer < ActiveModel::Serializer
  attributes :id, :movie_id
  has_and_belongs_to_many :users
end
