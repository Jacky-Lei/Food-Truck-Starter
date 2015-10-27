window.FoodtruckItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/foodtruck/' + this.props.foodtruck.id, {});
  },

  render: function () {
    var donationSum = 0;
      this.props.foodtruck.donations.forEach (function (donation) {
        donationSum += donation.amount;});

      var result =  (Math.round((donationSum/this.props.foodtruck.funding_goal) * 100)).toString();
      var resultPercentage =  result + "%";

      var today = (new Date()).getTime();
      var finishDay = (new Date(this.props.foodtruck['end_date'])).getTime();
      var timeDiff = Math.abs(today - finishDay);
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
      }

      var originalDescription = this.props.foodtruck.description;

      if(originalDescription.length >= 70){
        var shortDescription = originalDescription.slice(0,70) + "...";
      } else {
        var shortDescription = originalDescription;
      }

      if(this.props.foodtruck.title.length > 18){
        var foodtruckItemTitle = this.props.foodtruck.title.slice(0,16) + "...";
      } else {
        var foodtruckItemTitle = this.props.foodtruck.title;
      }




 var donationSumWithCommas = commaSeparateNumber(donationSum);

    return(
      <div onClick={this.showDetail} className="foodtruck-item">

        <div className="foodtruck-item-title">{foodtruckItemTitle}</div>

        <div className="foodtruck-item-image-container">
          <img src={this.props.foodtruck.image} className="foodtruck-item-image" />
        </div>

        <div className="foodtruck-item-short-description-container">
          <div className="foodtruck-item-short-description">{shortDescription}</div>
        </div>

        <div className="progress foodtruck-item-progress-bar">
          <div className="foodtruck-item-donation-bar progress-bar progress-bar-danger
            progress-bar-striped active" role="progressbar" aria-valuenow={{result}}
            aria-valuemin="0" aria-valuemax="100" style={{"width": resultPercentage}}>
          </div>
        </div>

        <div className="foodtruck-item-donation-sum">${donationSumWithCommas} funded</div>
        <div className="foodtruck-item-donation-percentage">{result}% funded</div>

        <div className="foodtruck-item-days-left">{diffDays} days left</div>



      </div>


    );
  }
});
