window.FoodtruckDetail = React.createClass({
  getStateFromStore: function () {
    return { foodtruck: FoodtruckStore.find(parseInt(this.props.params.foodtruckId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    FoodtruckStore.addFoodtruckDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleFoodtruck(parseInt(this.props.params.foodtruckId));
  },

  componentWillUnmount: function () {
    FoodtruckStore.removeFoodtruckDetailChangeListener(this._onChange);
  },

  render: function () {
    if(this.state.foodtruck === undefined) {return <div></div>;}

      return(
        <div>
          <div className="detail">
            <img src={this.state.foodtruck.image} />
            {['title', 'description', 'author_id', 'end_date', 'category_id', 'funding_goal'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.foodtruck[attr]}</p>;
              }.bind(this))}
          </div>
        </div>
      );

  }

});
