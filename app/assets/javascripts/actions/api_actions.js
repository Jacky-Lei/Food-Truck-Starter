window.ApiActions = {
  receiveAllFoodtrucks: function (foodtrucks) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.FOODTRUCKS_RECEIVED,
      foodtrucks: foodtrucks
    });
  },

}
