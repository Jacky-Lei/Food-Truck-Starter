var Button = ReactBootstrap.Button;

window.PerkForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  blankAttrs: {
    name: '',
    description: '',
    amount: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  submitPerk: function (event) {
    event.preventDefault();
    var perk = {};
    Object.keys(this.state).forEach(function (key) {
      {perk[key] = this.state[key];}
    }.bind(this));
    perk["foodtruck_id"] = this.props.foodtruckId;
    var perkKey = this.props.perkKey;
    ApiUtil.createPerk(perk);
    NonApiActions.receivePerkAlert(perkKey);
  },

  render: function () {
    return(
      <div className="new-perk">
        <form onSubmit={this.submitPerk} className="form-horizontal">
          <div>
            <label htmlFor='perk_name' className="col-sm-4">Perk Name:</label>
            <input
              type='string'
              label='Perk_Name'
              wrapperClassName="col-sm-9"
              id='perk_name'
              valueLink={this.linkState("name")}
            />
          </div>
          <div>
            <label htmlFor='perk_description' className="col-sm-4">Perk Description:</label>
            <input
              type='text'
              id='perk_description'
              wrapperClassName="col-sm-9"
              valueLink={this.linkState("description")}
            />
          </div>
          <div>
              <label htmlFor='perk_amount' className="col-sm-4">Perk Amount ($):</label>
              <input
                type='number'
                min="0"
                wrapperClassName="col-sm-9"
                id='perk_amount'
                valueLink={this.linkState("amount")}
              />
          </div>
          <Button bsStyle="primary" bsSize="medium">Register Perk</Button>
          <br/>
        </form>
        <AlertAutoDismissable alertKey={this.props.perkKey} perk={this.state}/>
      </div>
    );
  }
});
