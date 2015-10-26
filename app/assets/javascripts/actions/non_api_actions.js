window.NonApiActions = {

  receiveFilteredFoodtrucks: function (foodtrucks) {
    AppDispatcher.dispatch({
      actionType: FoodtruckConstants.FOODTRUCKS_RECEIVED,
      foodtrucks: foodtrucks
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
