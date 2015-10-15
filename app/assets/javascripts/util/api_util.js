window.ApiUtil = {
  fetchAllFoodTrucks: function () {
    $.ajax({
      url: "api/foodtrucks",
      success: function (foodtrucks) {
        ApiActions.receiveAllFoodtrucks(foodtrucks);
      }
    })
  },


}
