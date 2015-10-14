class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logout
    current_user.reset_session_token
    current_user.session_token = nil
  end

  def ensure_logged_in
    redirect_to new_session_url unless current_user
  end

  def ensure_not_logged_in
    redirect_to posts_url if current_user
  end

end