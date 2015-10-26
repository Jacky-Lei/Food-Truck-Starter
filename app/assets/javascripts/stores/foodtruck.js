(function () {
  var FOODTRUCK_INDEX_CHANGE_EVENT = "foodtrucksIndexChange";
  var FOODTRUCK_DETAIL_CHANGE_EVENT = "foodtrucksIndexChange";
  var FOODTRUCK_ERRORS_CHANGE_EVENT = "foodtrucksErrorChange";
  var _foodtrucks = [];

  var _errors = [];

  var resetFoodtrucks = function (foodtrucks) {
    _foodtrucks = foodtrucks;
  };

  var resetErrors = function (errors) {
    _errors = errors;
  };

  var resetFoodtruck = function (foodtruck) {

  var switched = false;
  _foodtrucks.forEach(function (ft) {
    if(ft.id === foodtruck.id) {
      _foodtrucks[_foodtrucks.indexOf(ft)] = foodtruck;
      switched = true;
    }
  });
  if(!switched) { _foodtrucks.push(foodtruck); }
  };

  window.FoodtruckStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _foodtrucks.slice();
    },

    find: function (id) {
      var foodtruck;
      _foodtrucks.forEach(function (ft) {
        if(ft.id === id) { foodtruck = ft; }
      });

      return foodtruck;
    },

    getErrors: function () {
      return _errors.slice();
    },

    addFoodtruckErrorsChangeListener: function (callback) {
      this.on(FOODTRUCK_ERRORS_CHANGE_EVENT, callback);
    },

    removeFoodtruckErrorsChangeListener: function (callback) {
      this.removeListener(FOODTRUCK_ERRORS_CHANGE_EVENT, callback);
    },

    addFoodtruckDetailChangeListener: function (callback) {
      this.on(FOODTRUCK_DETAIL_CHANGE_EVENT, callback);
    },

    removeFoodtruckDetailChangeListener: function (callback) {
      this.removeListener(FOODTRUCK_DETAIL_CHANGE_EVENT, callback);
    },

    addFoodtruckIndexChangeListener: function (callback) {
      this.on(FOODTRUCK_INDEX_CHANGE_EVENT, callback);
    },

    removeFoodtruckIndexChangeListener: function (callback) {
      this.removeListener(FOODTRUCK_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case FoodtruckConstants.FOODTRUCKS_RECEIVED:
          resetFoodtrucks(payload.foodtrucks);
          FoodtruckStore.emit(FOODTRUCK_INDEX_CHANGE_EVENT);
          break;
        case FoodtruckConstants.FOODTRUCK_RECEIVED:
          resetFoodtruck(payload.foodtruck);
          FoodtruckStore.emit(FOODTRUCK_DETAIL_CHANGE_EVENT);
          break;
        case FoodtruckConstants.FOODTRUCK_ERRORS_RECEIVED:
          resetErrors(payload.errors);
          FoodtruckStore.emit(FOODTRUCK_ERRORS_CHANGE_EVENT);
          console.log("made emit");
          break;

      }

    })


  });
})();
