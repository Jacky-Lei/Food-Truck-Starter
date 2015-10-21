window.FoodtruckItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/foodtruck/' + this.props.foodtruck.id, {});
  },

  render: function () {
    var donationSum = 0;
      this.props.foodtruck.donations.forEach (function (donation) {
        donationSum += donation.amount});

    return(
      <div onClick={this.showDetail} className="foodtruck-list-item">

        <div>{this.props.foodtruck.title}</div>
        <img src={this.props.foodtruck.image} className="foodtruck-list-item-image" />

        <p>Goal: $ {this.props.foodtruck.funding_goal}</p>
        <p>Raised: $ {donationSum}</p>

      </div>

    );
  }
});
