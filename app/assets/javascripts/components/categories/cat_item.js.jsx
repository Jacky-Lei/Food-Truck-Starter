window.CategoryItem = React.createClass({
  showFoodtruckIndex: function () {
        NonApiActions.receiveFilteredFoodtrucks(this.props.category.foodtrucks);
  },

  render: function () {
    return(
      <div onClick={this.showFoodtruckIndex} className="category-item col-md-3">
        <button className="btn btn-warning">Category Name: {this.props.category.name}</button>
      </div>
    );
  }
});
