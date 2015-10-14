class Api::perkController < ApplicationController
  def create
    @perk = Perk.new(perk_params)

    if @perk.save
      render :show
    else
      render json: @perk.errors.full_messages, status: 422
    end
  end

  def destroy
    @perk = Perk.find(params[:id])
    @perk.destroy
    render :show
  end

  def index
    @perk = Perk.all
  end

  def show
    @perk = Perk.find(params[:id])
  end

  private

  def perk_params
    params.require(:perk).permit(
      :image_url, :attack, :defense, :name, :poke_type, moves: []
    )
  end
end
