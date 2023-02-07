class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :current_profile
end
