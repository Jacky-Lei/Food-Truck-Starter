window.FoodtruckForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
    category: '',
    end_date: '',
    funding_goal: '',

  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createFoodtruck: function () {
    event.preventDefault();

    if (!window.CURRENT_USER_ID)
      {window.location="/users/new"};

    var foodtruck = {};
    var perkFormErrorsArray = [];
    Object.keys(this.state).forEach(function (key) {
      if(this.state[key] === ''){
        perkFormErrorsArray.push(key);
      }
      {foodtruck[key] = this.state[key];}
    }.bind(this));
    if (perkFormErrorsArray.length !== 0){
      NonApiActions.receiveFoodtruckErrors(perkFormErrorsArray);
    }

    if(foodtruck.image === undefined){
      foodtruck.image = "http://lpautoglassorlando.com/blog/wp-content/uploads/2015/09/food-truck-pic.jpg";
    }

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

           $(foodtruck_image).text = "Upload Good";
           this.state.image = result[0].url;
         }
         console.log(error, result);
       }.bind(this),false);
  },



  render: function () {
    if (!window.CURRENT_USER_ID){
      var createFoodTruckButtonText = "Sign Up to Create Food Truck!";
      var errorComponent = <div></div>;
    } else {
      var createFoodTruckButtonText = "Create Food Truck!";
      var errorComponent = <div><PerkFormError/></div>;
    }

    var today = new Date().toISOString().split('T')[0];

    return(

      <div className="foodtruck-form-container">
      <form className="foodtruck-form form-horizontal" onSubmit={this.createFoodtruck}>

        <div className="form-group">
          <label htmlFor='foodtruck_title' className="col-sm-3 control-label foodtruck-form-label">Food Truck Name:</label>
          <div className="col-sm-7">
            <input
            type='string'
            id='foodtruck_title'
            valueLink={this.linkState("title")}
            placeholder="By what glorious word or phrase will the hungry refer to you by?"
            className="form-control"
            />
          </div>
          <div className="col-sm-2"></div>
        </div>

        <div className="form-group">
          <label htmlFor='foodtruck_description' className="col-sm-3 control-label foodtruck-form-label">Description:</label>
          <div className="col-sm-7">
            <textarea
              type='text'
              id='foodtruck_description'
              valueLink={this.linkState("description")}
              placeholder="What are you about? What is this food about? What is life about???"
              className="form-control"
            />
          </div>
          <div className="col-sm-2"></div>
        </div>

        <div className="form-group">
            <label htmlFor='foodtruck_end_date' className="col-sm-3 control-label foodtruck-form-label">End Date:</label>
            <div className="col-sm-7">
              <input
                type='date'
                id='foodtruck_end_date'
                min={today}
                valueLink={this.linkState("end_date")}
                className="form-control"
              />
            </div>
            <div className="col-sm-2"></div>
        </div>

        <div className="form-group">

            <label htmlFor='foodtruck_funding_goal' className="col-sm-3 control-label foodtruck-form-label">Funding Goal ($):</label>
          <div className="col-sm-7">
            <input
                type='number'
                min="1"
                id='foodtruck_funding_goal'
                valueLink={this.linkState("funding_goal")}
                placeholder="How much dough do you need to bake this food truck dream of yours?"
                className="form-control"
              />
          </div>
          <div className="col-sm-2"></div>
        </div>

        <div className="form-group">
          <label htmlFor='foodtruck_category' className="col-sm-3 control-label foodtruck-form-label">Category:</label>
          <div className="col-sm-7">
            <select id='foodtruck_category' className="form-control" valueLink={this.linkState("category")} >
              <option selected ="" >Select Your Food Truck Category</option>
              <option value="Hispanic" >Hispanic</option>
              <option value="Asian" >Asian</option>
              <option value="American" >American</option>
              <option value="Indian" >Indian</option>
              <option value="European" >European</option>
            </select>
          </div>
          <div className="col-sm-2"></div>
        </div>

        <div className="form-group">
          <label htmlFor='foodtruck_image' className="col-sm-3 control-label foodtruck-form-label">Image:</label>
          <div className="col-sm-7">
          <button onClick={this._placeImage} id="foodtruck_image" className="form-control">Upload Depiction of Deliciousness</button>
          </div>
          <div className="col-sm-2"></div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-7">
            <button className="form-control btn btn-danger">{createFoodTruckButtonText}</button>
          </div>
          <div className="col-sm-2"></div>
        </div>


      </form>

      {errorComponent}
    </div>

    );
  }
});
