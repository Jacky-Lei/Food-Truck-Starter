var Alert = ReactBootstrap.Alert;

window.PerkFormError = React.createClass({
  getInitialState() {
    return {
      alertVisible: false,
      errors: [],
    };
  },

  componentDidMount: function () {

    FoodtruckStore.addFoodtruckErrorsChangeListener(this.handleAlertShow);
  },

  componentWillUnmount: function () {
    FoodtruckStore.addFoodtruckErrorsChangeListener(this.handleAlertShow);
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({errors : FoodtruckStore.getErrors()});
    this.setState({alertVisible: true});
  },

  render() {

    if (this.state.alertVisible) {

      return (

        <Alert bsStyle="info" onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
          <div>{this.state.errors.indexOf('title') === -1 ?  "" :  "Please Enter Title"}</div>
          <div>{this.state.errors.indexOf('description') === -1 ?  "" :  "Please Enter Description"}</div>
          <div>{this.state.errors.indexOf('end_date') === -1 ?  "" :  "Please Enter End Date"}</div>
          <div>{this.state.errors.indexOf('funding_goal') === -1 ?  "" :  "Please Enter Funding Goal"}</div>
          <div>{this.state.errors.indexOf('category') === -1 ?  "" :  "Please Enter Category"}</div>
        </Alert>
      );
    }

    return (
      <div></div>
    );
  },

});
