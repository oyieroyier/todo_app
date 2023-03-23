class Todo < ApplicationRecord
  belongs_to :user

  enum :status, %i[CREATED STARTED COMPLETED CANCELED]
  enum :priority, %i[LOW MEDIUM HIGH]

  validates :title, { length: { minimum: 5, maximum: 20 }, presence: true }
  validates :description, { length: { minimum: 20 }, presence: true }
  # validates :status, numericality: { in: (0..3) }
  # validates :priority, numericality: { in: (0..3) }
end
