window.ContainerForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
    image: '',
    category: '',
    end_date: '',
    funding_goal: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createFoodtruck: function () {
    event.preventDefault();
    var foodtruck = {};
    Object.keys(this.state).forEach(function (key) {
      {foodtruck[key] = this.state[key];}
    }.bind(this))


    ApiUtil.createFoodtruck(foodtruck, function (id) {
      this.history.pushState(null, "/foodtruck/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);

  },


  render: function () {
    return(
      <form className="new-foodtruck" onSubmit={this.createFoodtruck}>

        <div>
          <FoodtruckForm/>
        </div>

        <div>
          <PerkForm/>
        </div>

        

        <button>Create foodtruck</button>
        <br />

      </form>
    );
  }
});
