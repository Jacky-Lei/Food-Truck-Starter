window.PerkFormIndex = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    numRewards: 1,
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  registerPerkState: function () {
    event.preventDefault();
    var perk = {};
    Object.keys(this.state).forEach(function (key) {
      {perk[key] = this.state[key];}
    }.bind(this));
    console.log("perk registered");
  },

  makePerkForm: function () {
    event.preventDefault();
    console.log("hi");
    this.setState({numRewards: this.state.numRewards + 1});
  },


  finishPerk: function () {debugger
    event.preventDefault();
    this.history.pushState(null, '/foodtruck/' + this.props.foodtruckId, {});
  },

  render: function () {
    var formInputs = [];

    for (var i = 0; i < this.state.numRewards; i++) {
      formInputs.push(
        <PerkForm key={i} foodtruckId={this.props.foodtruckId}/>
      );
    }

    return(
      <div>
      <div onClick={this.makePerkForm} className="perk-form-button">
        <p>Add Another Perk</p>
      </div>

      <div>{formInputs}</div>

      <div onClick={this.finishPerk} className="finish-perk-form-button">
        <p>Finish Food Truck!</p>
      </div>

      </div>

    );
  }
});
