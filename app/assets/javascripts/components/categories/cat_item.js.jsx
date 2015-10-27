window.CategoryItem = React.createClass({
  showFoodtruckIndex: function () {

      NonApiActions.receiveCategoryId(this.props.category.id);
  },

  render: function () {
    return(
      <div onClick={this.showFoodtruckIndex} className="category-item">
        <div>{this.props.category.name.toUpperCase()}</div>
      </div>
    );
  }
});
