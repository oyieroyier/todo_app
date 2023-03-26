class TodosController < ApplicationController
  before_action :session_expired?

  rescue_from StandardError, with: :invalid_priority

  def create
    todo = user.todos.create(todo_params)
    if todo.valid?
      app_response(status: :created, data: todo)
    else
      app_response(
        message: 'Failed',
        status: :unprocessable_entity,
        data: todo.errors,
      )
    end
  end

  def update
    todo = user.todos.find(params[:id])
    todo.update(todo_params)
    if todo
      app_response(data: { info: 'Updated successfully' })
    else
      app_response(
        message: 'failed',
        data: {
          info: 'Could not update',
        },
        status: :unprocessable_entity,
      )
    end
  end

  def destroy
    todo = user.todos.find(params[:id])
    todo.destroy
    app_response(message: 'Deleted successfully')
  end

  def index
    todo = user.todos.all
    app_response(message: 'Success', status: :ok)
  end

  private

  def todo_params
    params.permit(:title, :description, :status, :priority)
  end

  def invalid_priority
    app_response(
      message: 'Failed',
      status: :unprocessable_entity,
      data: {
        info: 'Invalid priority',
      },
    )
  end
end
