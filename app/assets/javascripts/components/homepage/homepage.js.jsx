window.Homepage = React.createClass({
  render: function(){
    return(
    <div>
      <div className="homepage">
      
        <Filter/>
      </div>

      {this.props.children}
    </div>
  )}
})
