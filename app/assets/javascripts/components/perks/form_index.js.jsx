window.PerkFormIndex = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    numPerkForms: 1,
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  makePerkForm: function () {
    this.setState({numPerkForms: this.state.numPerkForms + 1});
  },


  finishPerk: function () {
    this.history.pushState(null, 'foodtruck/' + this.props.foodtruckId, {});
  },

  render: function () {
    var formInputs = [];

    for (var i = 0; i < this.state.numPerkForms; i++) {
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

      <button onClick={this.finishPerk} className="finish-perk-form-button">
        Finish Food Truck!
      </button>

      </div>

    );
  }
});
