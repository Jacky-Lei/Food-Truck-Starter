class Api::DonationsController < ApplicationController
  def create

    @donation = current_user.donations.new(donation_params)
    if @donation.save
      render :show
    else
      render json: @donation.errors.full_messages, status: 422
    end
  end

  def show
    @donation = Donation.includes(:foodtruck).includes(:perks)find(params[:id])
  end

  def donation_params
    params.require(:donation).permit(
      :amount, :foodtruck_id, :perk_id
    )
  end
end
