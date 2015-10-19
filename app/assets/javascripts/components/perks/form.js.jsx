window.PerkForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  blankAttrs: {
    name: '',
    description: '',
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

  render: function () {
    return(
      <form className="new-perk" onSubmit={this.registerPerkState}>

        <div>
          <label htmlFor='perk_name'>Perk Name:</label>
          <input
            type='string'
            id='perk_name'
            valueLink={this.linkState("name")}
          />
        </div>

        <div>
          <label htmlFor='perk_description'>Perk Description:</label>
          <input
            type='text'
            id='perk_description'
            valueLink={this.linkState("description")}
          />
        </div>

        <div>
            <label htmlFor='perk_amount'>Perk Amount ($):</label>
            <input
              type='number'
              min="0"
              id='perk_amount'
              valueLink={this.linkState("amount")}
            />
        </div>

        <button>Add Perk</button>

        <br />

      </form>
    );
  }
});
