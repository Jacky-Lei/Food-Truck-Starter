(function () {
  var CATEGORY_INDEX_CHANGE_EVENT = "categoriesIndexChange";
  var CATEGORY_DETAIL_CHANGE_EVENT = "categoriesIndexChange";

  var _categories = [];

  var resetCategories = function (categories) {
    _categories = categories;
  };

  var resetCategory = function (category) {

  var switched = false;
  _categories.forEach(function (cat) {
    if(cat.id === category.id) {
      _categories[_categories.indexOf(cat)] = category;
      switched = true;
    }
  });
  if(!switched) { _categories.push(category); }
  };

  window.CategoryStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _categories.slice();
    },

    find: function (id) {
      var category;
      _categories.forEach(function (ft) {
        if(ft.id === id) { category = ft; }
      })

      return category;
    },

    addCategoryDetailChangeListener: function (callback) {
      this.on(CATEGORY_DETAIL_CHANGE_EVENT, callback);
    },

    removeCategoryDetailChangeListener: function (callback) {
      this.removeListener(CATEGORY_DETAIL_CHANGE_EVENT, callback);
    },

    addCategoryIndexChangeListener: function (callback) {
      this.on(CATEGORY_INDEX_CHANGE_EVENT, callback);
    },

    removeCategoryIndexChangeListener: function (callback) {
      this.removeListener(CATEGORY_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case CategoryConstants.CATEGORIES_RECEIVED:
          resetCategories(payload.categories);
          CategoryStore.emit(CATEGORY_INDEX_CHANGE_EVENT);
          break;
        case CategoryConstants.CATEGORIES_RECEIVED:
          resetCategory(payload.category);
          CategoryStore.emit(CATEGORY_DETAIL_CHANGE_EVENT);
          break;
      }

    })


  });
})();
