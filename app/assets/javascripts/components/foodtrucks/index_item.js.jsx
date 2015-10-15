window.FoodtruckItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/foodtruck/' + this.props.foodtruck.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showDetail} className="foodtruck-list-item">
        <p>Name: {this.props.foodtruck.title}</p>
      </li>

    );
  }
});
