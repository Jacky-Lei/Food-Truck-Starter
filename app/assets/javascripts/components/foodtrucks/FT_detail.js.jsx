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
          <div className="foodtruck-detail">
            <h1 className="foodtruck-detail-title"> {this.state.foodtruck.title}</h1>
            <h4 className="foodtruck-detail-by">by: <div className="foodtruck-detail-by-username">
              {this.state.foodtruck.user.username}
            </div></h4>

            <img className="foodtruck-detail-image" src={this.state.foodtruck.image} />
            {['description', 'end_date', 'funding_goal'].map(function (attr) {

              return <div key={attr}>{attr}: {this.state.foodtruck[attr]}</div>;
              }.bind(this))}

              <div>Days left: {diffDays}</div>

                <ol>Perks: {this.state.foodtruck.perks.map(function (perk){
                    return <PerkItem key={perk.id} perk={perk}/>;
                    }
                  )}
                </ol>


              <div>Category: {this.state.foodtruck.category.name}</div>


              <div><DonationBar donationSum={donationSum}/></div>


            <div>{this.props.route.path.indexOf("createfoodtruck") === -1 ?  <DonationForm foodtruckId={this.props.params.foodtruckId}/> : <PerkFormIndex foodtruckId={this.props.params.foodtruckId}/> }</div>

          </div>
        </div>
      );

    };
  }

});
