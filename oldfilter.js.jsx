window.Filter = React.createClass({

  var categoryTypes = ["Hispanic", "Asian", "Western"];


  render: function(){
    return(
    <div>
      <div className="filter">

        <FoodtruckIndex/>
      </div>

      {this.props.children}
    </div>

    <div>
      <ul>
        <li></li>
      </ul>


    </div>
  )}

})

window.Filter = React.createClass({
  mixins: [ReactRouter.History],
  showHispanic: function () {
    this.history.pushState(null, '/Hispanic/', {});
  },

  showAsian: function () {
    this.history.pushState(null, '/Asian/', {});
  },

  showAmerican: function () {
    this.history.pushState(null, '/American/', {});
  },

  render: function () {
    return(
      <ul>

      <li onClick={this.showHispanic} className="foodtruck-list-item">
        <p>Hispanic</p>
      </li>

      <li onClick={this.showAsian} className="foodtruck-list-item">
        <p>Asian</p>
      </li>

      <li onClick={this.showAmerican} className="foodtruck-list-item">
        <p>American</p>
      </li>

      </ul>

    );
  }
});
