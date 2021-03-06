class Api::CategoriesController < ApplicationController

  def index
    @category = Category.includes(:foodtrucks).includes(foodtrucks: :user).includes(foodtrucks: :perks).includes(foodtrucks: :donations).all
  end

  def show
    @category = Category.find(params[:id])
  end

  private

  def category_params
    params.require(:category).permit(
      :name
    )
  end
end
