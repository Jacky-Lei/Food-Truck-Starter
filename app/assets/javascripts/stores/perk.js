(function () {
  var PERK_CHANGE_EVENT = "perkChange";

  var _perks = [];

  var resetPerk = function (perk) {

    _perks = [];
    _perks.push(perk);

  };

  var lastPerkId = function () {
    return _perks[_perks.length - 1].id;
  };

  var lastPerkAmount = function () {
    return _perks[_perks.length - 1].amount;
  };

  window.PerkStore = $.extend({}, EventEmitter.prototype, {

    find: function (id) {
      var perk;
      _perks.forEach(function (pk) {
        if(pk.id === id) { perk = pk; }
      });

      return perk;
    },

    getPerkId: function () {
      return lastPerkId();
    },

    getPerkAmount: function () {
      return lastPerkAmount();
    },

    addPerkChangeListener: function (callback) {
      this.on(PERK_CHANGE_EVENT, callback);
    },

    removePerkChangeListener: function (callback) {
      this.removeListener(PERK_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PerkConstants.PERK_RECEIVED:

        resetPerk(payload.perk);
        PerkStore.emit(PERK_CHANGE_EVENT);
        break;
      }
    })

  });



})();
