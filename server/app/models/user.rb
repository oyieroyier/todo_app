class User < ApplicationRecord
  has_secure_password
  validates :username,
            { length: { in: 5..8 }, uniqueness: true, presence: true }
  validates :email, { uniqueness: true, presence: true }
end
