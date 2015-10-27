window.FoodtruckIndex = React.createClass({
  getInitialState: function () {
    return { foodtrucks: FoodtruckStore.all() };
  },

  _onChange: function () {
    this.setState({ foodtrucks: FoodtruckStore.all() });
  },

  _onCategoryChange: function () {
    this.setState({ foodtrucks: FoodtruckStore.getFilteredFoodtrucks() });
  },

  componentDidMount: function () {
    FoodtruckStore.addFoodtruckIndexChangeListener(this._onChange);
    FoodtruckStore.addFoodtruckDetailChangeListener(this._onChange);
    FoodtruckStore.addFoodtruckCategoryChangeListener(this._onCategoryChange);
    ApiUtil.fetchAllFoodTrucks();
  },

  componentWillUnmount: function () {
    FoodtruckStore.removeFoodtruckIndexChangeListener(this._onChange);
    FoodtruckStore.removeFoodtruckDetailChangeListener(this._onChange);
    FoodtruckStore.removeFoodtruckCategoryChangeListener(this._onCategoryChange);
  },

  render: function () {

    return(

      <div className="foodtruck-index">
        {this.state.foodtrucks.map(function (foodtruck) {
          return <FoodtruckItem key={foodtruck.id} foodtruck={foodtruck} />;
        })}
      </div>

    );
  }


});
