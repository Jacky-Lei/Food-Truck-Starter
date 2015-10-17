window.FoodtruckDetail = React.createClass({
  getStateFromStore: function () {

    return { foodtruck: FoodtruckStore.find(parseInt(this.props.params.foodtruckId)) };
  },

  _onChange: function () {

    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {

    FoodtruckStore.addFoodtruckDetailChangeListener(this._onChange);
    ApiUtil.fetchSingleFoodtruck(parseInt(this.props.params.foodtruckId));
  },



  componentWillUnmount: function () {
    FoodtruckStore.removeFoodtruckDetailChangeListener(this._onChange);
  },

  render: function () {


    if(this.state.foodtruck === undefined) {return <div></div>;}


      return(
        <div>
          <div className="detail">
            <img src={this.state.foodtruck.image} />
            {['title', 'description', 'end_date', 'funding_goal'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.foodtruck[attr]}</p>;
              }.bind(this))}


              <p>{this.state.foodtruck.user.username}</p>

              <p>{this.state.foodtruck.category.name}</p>

            <p>{this.state.foodtruck.donations.map(



              return(

                <ul className="items">
                  {donationSum = 0;
                    for (i = 0; i < this.state.foodtruck.donations; i++){
                      donationSum += this.state.foodtruck.donations[i];
                    }
                    return <DonationBar donationSum={donationSum};
                    return <FoodtruckItem key={foodtruck.id} foodtruck={foodtruck} />;

                  })}
                </ul>
              );



          </div>
        </div>
      );

  }

});
