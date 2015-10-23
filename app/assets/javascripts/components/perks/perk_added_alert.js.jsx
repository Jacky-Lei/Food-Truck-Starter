var Alert = ReactBootstrap.Alert;

window.AlertAutoDismissable = React.createClass({
  getInitialState() {
    return {
      alertVisible: false,
      alertKey: this.props.alertKey
    };
  },

  componentDidMount: function () {
    PerkStore.addPerkAlertChangeListener(this.handleAlertShow);
  },

  componentWillUnmount: function () {
    PerkStore.removePerkAlertChangeListener(this.handleAlertShow);
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  },

  render() {

    if (this.state.alertVisible && this.state.alertKey === PerkStore.getPerkKey()) {
      if((this.props.perk.name !== "") && (this.props.perk.description!== "") && (this.props.perk.description!== "")){
        var perkRegistered = true;
      }
      return (

        <Alert bsStyle="info" onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
          <div>{this.props.perk.name === "" ?  "Please Enter Perk Name" :  ""}</div>
          <div>{this.props.perk.description === "" ?  "Please Enter Perk Description" :  ""}</div>
          <div>{this.props.perk.amount === "" ?  "Please Enter Perk Amount" :  ""}</div>
          <h4>{perkRegistered ? this.props.perk.name + " Registered!" : ""}</h4>
        </Alert>
      );
    }

    return (
      <div></div>
    );
  },

});
