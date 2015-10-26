window.DonationConfirmation = React.createClass({

  render: function () {
    return(
      <div className="donation-confirmation-item">
      {this.props.donationAmount} Contributed!
      </div>
    );
  }
});
