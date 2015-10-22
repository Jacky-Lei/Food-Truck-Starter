window.FoodtruckItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/foodtruck/' + this.props.foodtruck.id, {});
  },

  render: function () {
    var donationSum = 0;
      this.props.foodtruck.donations.forEach (function (donation) {
        donationSum += donation.amount});

      var result =  ((donationSum/this.props.foodtruck.funding_goal) * 100).toString() + "%";

    return(
      <div onClick={this.showDetail} className="foodtruck-item">

        <div className="foodtruck-item-title">{this.props.foodtruck.title}</div>
        <img src={this.props.foodtruck.image} className="foodtruck-item-image" />


        <div className="foodtruck-item-goal">Goal: $ {this.props.foodtruck.funding_goal}</div>
        <div className="progress">
          <div className="foodtruck-item-donation-bar progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": result}}>
            <span>60%</span>
          </div>
        </div>


      </div>


    );
  }
});
