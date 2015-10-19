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

  receiveAllCategories: function (categories) {
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORIES_RECEIVED,
      categories: categories
    });
  },

  receiveSingleCategory: function (category) {
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORY_RECEIVED,
      category: category
    });
  },

}
