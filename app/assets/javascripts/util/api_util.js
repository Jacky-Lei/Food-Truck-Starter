window.ApiUtil = {
  fetchAllFoodTrucks: function () {
    $.ajax({
      url: "api/foodtrucks",
      success: function (foodtrucks) {
        ApiActions.receiveAllFoodtrucks(foodtrucks);
      }
    })
  },

  fetchSingleFoodtruck: function () {
    $.ajax({
      url: "api/foodtrucks",
      success: function (foodtruck) {
        ApiActions.receiveSingleFoodtruck(foodtruck);
      }
    })
  },


}
