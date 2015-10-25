window.PerkItem = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {togglePerk: false};
  },

  storePerk: function () {
     NonApiActions.receivePerk(this.props.perk);
     this.setState({togglePerk: true});
     setTimeout(function () {
       this.setState({togglePerk: false});}.bind(this), 2000)
  },


  render: function () {

    if(this.state.togglePerk === false){
      renderPerkDonationConfirmation = <div></div>;
    } else {
      renderPerkDonationConfirmation = <div><PerkDonationConfirmation perkName={this.props.perk.name}/></div>;
    }

    var numBackers = 0;

    this.props.donations.forEach(function(donation){
      if(donation.perk_id === this.props.perk.id){
        numBackers += 1;
      }
    }.bind(this))


    return(
      <li onClick={this.storePerk} className="perk-item">
        <div className="perk-item-amount">${this.props.perk.amount}</div>
        <div className="perk-item-name">{this.props.perk.name}</div>
        <div className="perk-item-description">{this.props.perk.description}</div>
        <div className="perk-item-divider"></div>
        <div className="perk-item-backers">{numBackers} claimed</div>
        <div> {renderPerkDonationConfirmation}</div>
      </li>




    );
  }
});
