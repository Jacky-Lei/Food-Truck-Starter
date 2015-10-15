class Api::FoodtrucksController < ApplicationController
  def create
    @foodtruck = Foodtruck.new(foodtruck_params)

    if @foodtruck.save
      render :show
    else
      render json: @foodtruck.errors.full_messages, status: 422
    end
  end

  def index
    @foodtruck = Foodtruck.all
  end

  def show
    @foodtruck = Foodtruck.find(params[:id])
  end

  private

  def foodtruck_params
    params.require(:foodtruck).permit(
      :image_url, :attack, :defense, :name, :poke_type, moves: []
    )
  end
end
