window.ApiUtil = {
  fetchAllFoodTrucks: function () {
    $.ajax({
      url: "api/foodtrucks",
      success: function (foodtrucks) {
        ApiActions.receiveAllFoodtrucks(foodtrucks);
      }
    });
  },

  fetchSingleFoodtruck: function (id) {
    $.ajax({
      url: "api/foodtrucks/" + id,
      success: function (foodtruck) {
        ApiActions.receiveSingleFoodtruck(foodtruck);
      }
    });
  },

  createFoodtruck: function (foodtruck, callback) {
    $.ajax({
      url: "api/foodtrucks/",
      method: "POST",
      data: {foodtruck: foodtruck},
      success: function (foodtruck) {
        ApiActions.receiveSingleFoodtruck(foodtruck);
        callback && callback(foodtruck.id);
      }
    });
  },

  createDonation: function (donation, callback) {
    $.ajax({

      url: "api/donations/",
      method: "POST",
      data: {donation: donation},
      success: function (donation) {
        ApiUtil.fetchSingleFoodtruck(donation.foodtruck.id);
      },
      error: function (responseData) {
        console.log(responseData);
      }
    });
  },



};
