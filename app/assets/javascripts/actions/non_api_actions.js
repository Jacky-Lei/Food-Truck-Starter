window.NonApiActions = {

  receiveAllFoodtrucks: function (foodtrucks) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.FOODTRUCKS_RECEIVED,
      foodtrucks: foodtrucks
    });
  },

  receiveCategoryId: function (categoryId) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.CATEGORY_ID_RECEIVED,
      categoryId: categoryId
    });
  },

  receivePerk: function (perk) {
    AppDispatcher.dispatch({
      actionType: PerkConstants.PERK_RECEIVED,
      perk: perk
    });
  },

  receivePerkAlert: function (perkKey) {
    AppDispatcher.dispatch({
      actionType: PerkConstants.PERK_ALERT_RECEIVED,
      perkKey: perkKey
    });
  },

  receiveFoodtruckErrors: function (errors) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.FOODTRUCK_ERRORS_RECEIVED,
      errors: errors
    });
  },

};
