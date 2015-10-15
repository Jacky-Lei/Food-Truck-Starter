window.ApiActions = {
  receiveAllFoodtrucks: function (foodtrucks) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.FOODTRUCKS_RECEIVED,
      foodtrucks: foodtrucks
    });
  },

  receiveSingleFoodtruck: function (foodtruck) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.FOODTRUCK_RECEIVED,
      foodtruck: foodtruck
    });
  },

}
