window.DonationForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  blankAttrs: {
    amount: '',
    perk_id: undefined,
    toggleDonation: false
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  _onPerkChange: function () {
    this.setState({ perk_id: PerkStore.getPerkId(), amount: PerkStore.getPerkAmount()});
  },

  componentDidMount: function () {
    PerkStore.addPerkChangeListener(this._onPerkChange);
  },

  componentWillUnmount: function () {
    PerkStore.removePerkChangeListener(this._onPerkChange);
  },

  resetlife: function () {
    setTimeout(function() {
      this.setState(this.blankAttrs);}.bind(this), 2000)
  },

  createDonation: function () {

    event.preventDefault();
    var donation = {};

    donation.amount = this.state.amount;
    if(this.state.perk_id) {
      donation.perk_id = this.state.perk_id;
    }

    donation.foodtruck_id = this.props.foodtruckId;
    ApiUtil.createDonation(donation);
    this.setState({toggleDonation: true}, this.resetlife);

  },

  redirectToSignUp: function () {
    event.preventDefault();
    window.location="/users/new";
  },

  render: function () {


    if (window.CURRENT_USER_ID) {

      if(this.state.toggleDonation === false){
        renderDonationConfirmation = <div></div>;
        } else {
          renderDonationConfirmation = <div><DonationConfirmation donationAmount={this.state.amount}/></div>;
        }

    return(
      <div className="donation-form-title">Your Contribution
      <form onSubmit={this.createDonation}>

        <div>
          <label htmlFor='donation_amount'></label>
          <input
            className="donation-form-amount"
            type='number'
            min='0'
            id='donation_amount'
            placeholder='$50 $100 $200'
            valueLink={this.linkState("amount")}
          />

        <div>
          <button className="donation-form-button">CONTRIBUTE NOW</button>
        </div>



        </div>

      </form>

          {renderDonationConfirmation}
      </div>
    );

  } else {

    return(
      <form className="new-donation" onSubmit={this.redirectToSignUp}>

        <div>
          <label htmlFor='donation_amount'>Amount:</label>
          <input
            type='number'
            min='0'
            id='donation_amount'
            valueLink={this.linkState("amount")}
          />
        </div>

        <button>Sign Up to Donate!</button>
        <br />

      </form>
    );


  }
  }
});
