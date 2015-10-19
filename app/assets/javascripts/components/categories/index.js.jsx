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

      <ul className="items">
        {this.state.categories.map(function (category) {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </ul>
    );
  }


});
