class Api::PerksController < ApplicationController
  def create
    @perk = Perk.new(perk_params)

    if @perk.save
      render :show
    else
      render json: @perk.errors.full_messages, status: 422
    end
  end

  def index
    @perks = Perk.all
  end

  def show
    @perk = Perk.find(params[:id])
  end

  private

  def perk_params
    params.require(:perk).permit(
      :name, :description, :amount, :foodtruck_id
    )
  end
end
