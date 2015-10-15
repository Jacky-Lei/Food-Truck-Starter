class Api::donationsController < ApplicationController
  def create
    @donation = Donation.new(donation_params)

    if @donation.save
      render :show
    else
      render json: @donation.errors.full_messages, status: 422
    end
  end

  def destroy
    @donation = Donation.find(params[:id])
    @donation.destroy
    render :show
  end

  def index
    @donation = Donation.all
  end

  def show
    @donation = Donation.find(params[:id])
  end

  private

  def donation_params
    params.require(:donation).permit(
      :image_url, :attack, :defense, :name, :poke_type, moves: []
    )
  end
end
