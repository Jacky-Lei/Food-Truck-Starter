window.CategoryItem = React.createClass({
  showFoodtruckIndex: function () {
      NonApiActions.receiveFilteredFoodtrucks(this.props.category.foodtrucks);
  },

  render: function () {
    return(
      <div onClick={this.showFoodtruckIndex} className="category-item">
        <div>{this.props.category.name.toUpperCase()}</div>
      </div>
    );
  }
});
