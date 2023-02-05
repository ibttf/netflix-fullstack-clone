class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :tag
  belongs_to :users
  belongs_to :movies
end
