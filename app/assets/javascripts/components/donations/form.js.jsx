window.DonationForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  blankAttrs: {
    amount: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createDonation: function () {

    event.preventDefault();
    var donation = {};

      donation["amount"] = this.state["amount"];


    donation["foodtruck_id"] = this.props.foodtruckId;
    ApiUtil.createDonation(donation);
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <form className="new-donation" onSubmit={this.createDonation}>

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
  }
});
