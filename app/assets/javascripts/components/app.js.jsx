window.App = React.createClass({
  render: function(){
    return(
    <div>
      <Navbar/>
      <div className="app">
      </div>

      {this.props.children}
    </div>
  )}
})
