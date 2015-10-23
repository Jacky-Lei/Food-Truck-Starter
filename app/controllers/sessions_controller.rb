class SessionsController < ApplicationController
  before_action :ensure_not_logged_in, only: [:create, :new]
  before_action :ensure_logged_in, only: [:destroy]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect Password/Username"]
      render :new
    end
  end

  def destroy
    logout
    render json: {}
  end

end
