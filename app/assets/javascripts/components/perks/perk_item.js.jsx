window.PerkItem = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {togglePerk: false};
  },

  storePerk: function () {
     NonApiActions.receivePerk(this.props.perk);
     this.setState({togglePerk: true});
  },

  render: function () {

    if(this.state.togglePerk === false){
      renderPerkDonationConfirmation = <div></div>;
    } else {
      renderPerkDonationConfirmation = <div><PerkDonationConfirmation perkName={this.props.perk.name}/></div>;
    }

    return(
      <li onClick={this.storePerk} className="perk-item">
        <p>Name: {this.props.perk.name}</p>
        <p>Description: {this.props.perk.description}</p>
        <p>Amount: {this.props.perk.amount}</p>
        {renderPerkDonationConfirmation}
      </li>




    );
  }
});
