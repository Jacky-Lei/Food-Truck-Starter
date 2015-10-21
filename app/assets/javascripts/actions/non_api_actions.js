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

};
