window.FoodtruckItem = React.createClass({
  mixins: [ReactRouter.History],
  showdetail: function () {
    this.history.pushState(null, '/foodtruck/' + this.props.foodtruck.id, {});
  },

  render: function () {
    return(
      <li onClick="FoodtruckItem">
        <p>Name: {this.props.foodtruck.title}</p>
      </li>

    );
  }
});
