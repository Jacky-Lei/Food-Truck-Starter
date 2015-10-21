window.DonationForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  blankAttrs: {
    amount: '',
    perk_id: undefined

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

  createDonation: function () {

    event.preventDefault();
    var donation = {};

    donation.amount = this.state.amount;
    if(this.state.perk_id) {
      donation.perk_id = this.state.perk_id;
    }

    donation.foodtruck_id = this.props.foodtruckId;
    ApiUtil.createDonation(donation);
    this.setState(this.blankAttrs);
  },

  redirectToSignUp: function () {
    event.preventDefault();
    window.location="/users/new";
  },

  render: function () {

    if (window.CURRENT_USER_ID) {
    return(
      <form className="new-donation" onSubmit={this.createDonation}>
        <h3>id: {this.state.perk_id}</h3>
        <div>
          <label htmlFor='donation_amount'>Amount:</label>
          <input
            type='number'
            min='0'
            id='donation_amount'
            valueLink={this.linkState("amount")}
          />
        </div>

        <button>Submit Donation</button>
        <br />

      </form>
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
