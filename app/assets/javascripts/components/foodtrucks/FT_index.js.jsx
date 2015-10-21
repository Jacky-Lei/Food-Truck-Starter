window.FoodtruckIndex = React.createClass({
  getInitialState: function () {
    return { foodtrucks: FoodtruckStore.all() };
  },

  _onChange: function () {
    this.setState({ foodtrucks: FoodtruckStore.all() });
  },

  componentDidMount: function () {
    FoodtruckStore.addFoodtruckIndexChangeListener(this._onChange);
    FoodtruckStore.addFoodtruckDetailChangeListener(this._onChange);
    ApiUtil.fetchAllFoodTrucks();
  },

  componentWillUnmount: function () {
    FoodtruckStore.removeFoodtruckIndexChangeListener(this._onChange);
    FoodtruckStore.removeFoodtruckDetailChangeListener(this._onChange);
  },

  render: function () {

    return(

      <ul className="foodtruck-index">
        {this.state.foodtrucks.map(function (foodtruck) {
          return <FoodtruckItem key={foodtruck.id} foodtruck={foodtruck} />;
        })}
      </ul>





    );
  }


});
