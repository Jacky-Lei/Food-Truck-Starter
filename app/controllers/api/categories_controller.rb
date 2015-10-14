class Api::categoryController < ApplicationController
  def create
    @category = Category.new(category_params)

    if @category.save
      render :show
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    render :show
  end

  def index
    @category = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  private

  def category_params
    params.require(:category).permit(
      :image_url, :attack, :defense, :name, :poke_type, moves: []
    )
  end
end
