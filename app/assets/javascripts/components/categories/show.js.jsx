window.CategoryItem = React.createClass({
  showFoodtruckIndex: function () {
        NonApiActions.receiveFilteredFoodtrucks(this.props.category.foodtrucks);
  },

  render: function () {
    return(
      <li onClick={this.showFoodtruckIndex} className="category-list-item">
        <p>Category Name: {this.props.category.name}</p>
      </li>

    );
  }
});
