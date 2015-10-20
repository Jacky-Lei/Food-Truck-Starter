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

  render: function () {

    if(this.state.foodtruck === null) {return <div></div>;}
      else{
          var donationSum = 0;
            this.state.foodtruck.donations.forEach (function (donation) {
              donationSum += donation.amount});

          var today = (new Date()).getTime();
          var finishDay = (new Date(this.state.foodtruck['end_date'])).getTime();
          var timeDiff = Math.abs(today - finishDay);
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return(
        <div>
          <div className="detail">
            <img src={this.state.foodtruck.image} />
            {['title', 'description', 'end_date', 'funding_goal'].map(function (attr) {

              return <p key={attr}>{attr}: {this.state.foodtruck[attr]}</p>;
              }.bind(this))}

              <p>Days left: {diffDays}</p>



              <p>Created by: {this.state.foodtruck.user.username}</p>
              <p>Category: {this.state.foodtruck.category.name}</p>


              <p><DonationBar donationSum={donationSum}/></p>





            <p>{this.props.route.path.indexOf("createfoodtruck") === -1 ?  <DonationForm foodtruckId={this.props.params.foodtruckId}/> : <PerkFormIndex foodtruckId={this.props.params.foodtruckId}/> }</p>

          </div>
        </div>
      );

    };
  }

});
