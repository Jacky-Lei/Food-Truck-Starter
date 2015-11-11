var Alert = ReactBootstrap.Alert;
var Button = ReactBootstrap.Button;

window.FoodtruckDetail = React.createClass({
  getStateFromStore: function () {
    return {foodtruck: FoodtruckStore.find(parseInt(this.props.params.foodtruckId))};
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return {foodtruck: null};
  },

  componentDidMount: function () {

    FoodtruckStore.addFoodtruckDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleFoodtruck(parseInt(this.props.params.foodtruckId));
  },

  componentWillUnmount: function () {
    FoodtruckStore.removeFoodtruckDetailChangeListener(this._onChange);
  },

  finishFoodtruck: function () {debugger
    ApiUtil.fetchSingleFoodtruck(parseInt(this.props.params.foodtruckId));
    this.props.history.pushState(null, 'foodtruck/' + this.props.params.foodtruckId, {});
  },

  render: function () {

    if(this.state.foodtruck === null) {return <div></div>;}
      else{

        var foodTruckDonations = this.state.foodtruck.donations;

          var donationSum = 0;
            foodTruckDonations.forEach (function (donation) {
              donationSum += donation.amount});

          var today = (new Date()).getTime();
          var finishDay = (new Date(this.state.foodtruck['end_date'])).getTime();
          var timeDiff = Math.abs(today - finishDay);
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

          var result =  (Math.round((donationSum/this.state.foodtruck.funding_goal) * 100)).toString();
          var resultPercentage =  result + "%";

          var backerArray = [];
          foodTruckDonations.forEach( function (donation) {
            backerArray.push(donation.backer_id)
          })
          var uniqBackerArray = $.unique(backerArray);

          if(['A','E','I','O','U'].indexOf(this.state.foodtruck.category.name[0]) === -1){
            var singularID = 'A'
          } else {
            var singularID = 'An'
          }

          if(uniqBackerArray.length === 1){
            var backers = "backer"
          } else {
            var backers = "backers"
          }

          function commaSeparateNumber(val){
            var digits = String(val).split("");
            var result = [];
            var commaIdx = ((digits.length % 3) - 1);
            for ( var i = 0; i < digits.length; i++) {
              if ((i === commaIdx) && (i !== digits.length-1)) {
              result.push(digits[i] + ",");
                commaIdx += 3;
            } else {
              result.push(digits[i]);
            }

            }
            return result.join("");
            }

          if(this.state.foodtruck.perks.length !==0){
            var selectAPerk = "Select a Perk";
          } else {
            var selectAPerk = "";
          }

      return(

        <div>
          <div className="foodtruck-detail">
            <div>
              <div className="foodtruck-detail-title" align="center">{this.state.foodtruck.title}</div>
              <div className="foodtruck-detail-category">{singularID} {this.state.foodtruck.category.name} Food Truck</div>
              <div className="foodtruck-detail-author" align="center">by {this.state.foodtruck.user.username}</div>
            </div>


            <div className="foodtruck-detail-image-description-container">
              <img className="foodtruck-detail-image" src={this.state.foodtruck.image} />
              <div className="foodtruck-detail-description">{this.state.foodtruck.description}</div>
            </div>


            <div className="foodtruck-detail-body">
              <div className="foodtruck-detail-num-of-backers">{commaSeparateNumber(uniqBackerArray.length)}
                <span className="foodtruck-detail-backers"> {backers}</span>
              </div>
              <div className="foodtruck-detail-donation-sum">${commaSeparateNumber(donationSum)}
                <span className="foodtruck-detail-funding-goal"> of ${commaSeparateNumber(this.state.foodtruck.funding_goal)} goal
                </span>
              </div>

              <div className="progress foodtruck-detail-donation-bar">
                <div className="foodtruck-detail-donation-bar progress-bar progress-bar-danger
                  progress-bar-striped active" role="progressbar" aria-valuenow={{result}}
                  aria-valuemin="0" aria-valuemax="100" style={{"width": resultPercentage}}>
                </div>
              </div>

              <div className="foodtruck-detail-donation-percentage">{result}% funded</div>

              <div className="foodtruck-detail-days">{diffDays}
                <span className="foodtruck-detail-days-left"> days to go</span>
              </div>

              <div className="foodtruck-detail-divider"></div>

              <div>
                {this.props.route.path.indexOf("createfoodtruck") === -1 ?
                  <DonationForm foodtruckId={this.props.params.foodtruckId}/> :

                    <div>
                    <Alert bsStyle="danger" className="perk-add-alert"> You are almost done! Simply click
                        <strong> "Add Perks"</strong> to make some custom rewards for your supporters or
                        <strong> "Finish Food Truck"</strong> to see your final food truck page!
                    </Alert>

                  <PerkFormIndex className="perk-form-index-holder" history={this.props.history} foodtruckId={this.props.params.foodtruckId}/>

                    <Button onClick={this.finishFoodtruck} className="perk-form-index-no-perks-button"
                      Button bsStyle="danger" bsSize="large" >
                      Finish Food Truck
                    </Button>
              </div>}
              </div>

              <div className="foodtruck-detail-divider"></div>

              <ol className="foodtruck-detail-perk-index">{selectAPerk} {this.state.foodtruck.perks.map(function (perk){
                  return <PerkItem key={perk.id} perk={perk} donations={foodTruckDonations} />;
                  }
                )}
              </ol>
          </div>

          </div>
        </div>
      );

    };
  }

});
