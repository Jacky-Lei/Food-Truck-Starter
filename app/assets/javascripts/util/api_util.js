window.ApiUtil = {

  logInGuest: function (user) {
    $.ajax({
      url: "/session/",
      method: "POST",
      data: {user: user},
      success: function () {
         window.location = "/";
      }
    });
  },

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

  fetchAllCategories: function () {
    $.ajax({
      url: "api/categories",
      success: function (categories) {
        ApiActions.receiveAllCategories(categories);
      },
      error: function (cat, msg) {
      }
    });
  },

  fetchSingleCategory: function (id) {
    $.ajax({
      url: "api/categories/" + id,
      success: function (category) {
        ApiActions.receiveSingleCategory(category);
      }
    });
  },

  createPerk: function (perk, callback) {
    $.ajax({
      url: "api/perks/",
      method: "POST",
      data: {perk: perk},
      success: function (perk) {
        ApiActions.receiveSingleFoodtruck(foodtruck);
        callback && callback(perk);
      }
    });
  },



};
