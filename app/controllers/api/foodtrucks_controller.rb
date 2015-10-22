class Api::FoodtrucksController < ApplicationController
  def create

    # foodtruck_params[:author_id] = current_user.id
    # foodtruck_params[:category_id] = (Category.find_by_name(foodtruck_params[:category])).id
    # @foodtruck = Foodtruck.new(foodtruck_params)
    @foodtruck = current_user.foodtrucks.new(foodtruck_params)
    @foodtruck.category_id = Category.find_by_name(params[:foodtruck][:category]).id


    if @foodtruck.save
      render :show
    else
      render json: @foodtruck.errors.full_messages, status: 422
    end
  end

  def index
    @foodtruck = Foodtruck.includes(:donations).includes(:perks).includes(:category).includes(:user).all
  end

  def show
    @foodtruck = Foodtruck.includes(:donations).includes(:perks).includes(:category).includes(:user).find(params[:id])
  end

  private

  def foodtruck_params
    params.require(:foodtruck).permit(
      :title, :description, :end_date, :funding_goal, :image
    )
  end
end
