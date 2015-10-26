window.CategoryIndex = React.createClass({
  getInitialState: function () {
    return { categories: CategoryStore.all() };
  },

  _onChange: function () {
    this.setState({ categories: CategoryStore.all() });
  },

  componentDidMount: function () {
    CategoryStore.addCategoryIndexChangeListener(this._onChange);
    CategoryStore.addCategoryDetailChangeListener(this._onChange);
    ApiUtil.fetchAllCategories();
  },

  componentWillUnmount: function () {
    CategoryStore.removeCategoryIndexChangeListener(this._onChange);
    CategoryStore.removeCategoryDetailChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div className="category-index">
        <div className="select-categories-label">Categories: </div>
        {this.state.categories.map(function (category) {
          return <CategoryItem key={category.id} category={category}/>;
        })}
      </div>
    );
  }
});
