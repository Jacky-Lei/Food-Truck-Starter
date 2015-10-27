window.DonationConfirmation = React.createClass({



  render: function () {

    if(this.props.donationAmount !== ""){
      var dollarSign = "$";
      var contributed = " Contributed!";
    } else {
      var dollarSign = "";
      var contributed = "";
    }

    return(
      <div className="donation-confirmation-item">
      {dollarSign}{this.props.donationAmount}{contributed}
      </div>
    );
  }
});
