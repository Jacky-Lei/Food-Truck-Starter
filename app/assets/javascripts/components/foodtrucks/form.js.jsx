window.FoodtruckForm = React.createClass({

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
    }.bind(this));

    ApiUtil.createFoodtruck(foodtruck, function (id) {
      this.history.pushState(null, "/createfoodtruck/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  _placeImage: function(){
    event.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: 'akantoword', upload_preset: 'i8ho2w3y'},
       function(error, result) {
         if (result){
           $(pic).text = "Upload Good";
           this.blankAttrs.image = result[0].url;
         }
         console.log(error, result);
       }.bind(this),false);
  },

  render: function () {
    return(
      <form className="new-foodtruck" onSubmit={this.createFoodtruck}>

        <div>
          <label htmlFor='foodtruck_title'>Title:</label>
          <input
            type='string'
            id='foodtruck_title'
            valueLink={this.linkState("title")}
          />
        </div>

        <div>
          <label htmlFor='foodtruck_description'>Description:</label>
          <input
            type='text'
            id='foodtruck_description'
            valueLink={this.linkState("description")}
          />
        </div>

        <div>
            <label htmlFor='foodtruck_end_date'>End Date:</label>
            <input
              type='date'
              id='foodtruck_end_date'
              valueLink={this.linkState("end_date")}
            />
        </div>

        <div>
            <label htmlFor='foodtruck_funding_goal'>Funding Goal ($):</label>
            <input
              type='number'
              min="0"
              id='foodtruck_funding_goal'
              valueLink={this.linkState("funding_goal")}
            />
        </div>

        <div>
          <label htmlFor='foodtruck_category'>Category:</label>
          <select id='foodtruck_category' valueLink={this.linkState("category") }defaultValue="Hispanic" >

            <option value="Hispanic" >Hispanic</option>
            <option value="Asian" >Asian</option>
            <option value="Western" >Western</option>
          </select>
        </div>

        <div>
          <button onClick={this._placeImage} id="pic">Picture</button>
        </div>

        <button>Create foodtruck</button>

        <br />

      </form>
    );
  }
});
