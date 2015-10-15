window.Filter = React.createClass({
  render: function(){
    return(
    <div>
      <div className="filter">

        <FoodtruckIndex/>
      </div>

      {this.props.children}
    </div>
  )}
})
