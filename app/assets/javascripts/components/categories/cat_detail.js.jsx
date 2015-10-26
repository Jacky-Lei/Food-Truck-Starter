window.CategoryDetail = React.createClass({
  getStateFromStore: function () {
    return {category: CategoryStore.find(parseInt(this.props.params.categoryId))};
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return {category: null};
  },

  componentDidMount: function () {
    CategoryStore.addCategoryChangeListener(this._onChange);
    ApiUtil.fetchSingleCategory(parseInt(this.props.params.categoryId));
  },

  componentWillUnmount: function () {
    CategoryStore.removeCategoryDetailChangeListener(this._onChange);
  },

  render: function () {
    if(this.state.category === null) {return <div></div>;}
      else {
      return(
        <ul className="items">
          {this.state.category.foodtrucks.map(function (foodtruck) {
            return <FoodtruckItem key={foodtruck.id} foodtruck={foodtruck} />;
          })}
        </ul>
      );
    };
  }
});
