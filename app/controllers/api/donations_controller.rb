class Api::donationsController < ApplicationController
  def create

    @donation = current_user.donations.new(donation_params)

    @donation.foodtruck_id = (params[:foodtruck][:id])



    if @donation.save
      render :show
    else
      render json: @donation.errors.full_messages, status: 422
    end
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
      :amount
    )
  end
end
