class User < ApplicationRecord
  validates :email, uniqueness: true
  validates :name, uniqueness: true
end
