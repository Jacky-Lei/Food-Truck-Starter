window.DonationConfirmation = React.createClass({


  render: function () {
    return(
      <div className="donation-confirmation-item">
      thanks for the donation
      {this.props.donationAmount} donated!
      </div>

    );
  }
});
