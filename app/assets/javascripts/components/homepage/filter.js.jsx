window.Filter = React.createClass({
  render: function(){
    return(
    <div>
      <div className="filter">

        <CategoryIndex/>
        <FoodtruckIndex/>

      </div>

      {this.props.children}
    </div>
  )}
})
