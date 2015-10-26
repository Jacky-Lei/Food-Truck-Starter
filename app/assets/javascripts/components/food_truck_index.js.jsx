window.IndexFoodtruckPage = React.createClass({
  render: function(){
    return(
    <div>
      <div className="homepage">

        <CategoryIndex/>
        <FoodtruckIndex/>

      </div>

      {this.props.children}
    </div>
  )}
})
