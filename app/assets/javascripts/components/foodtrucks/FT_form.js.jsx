window.FoodtruckForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
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
    if(foodtruck.image === undefined){
      foodtruck.image = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1Bpo5p4PYAvgnZ1dSc1IP2IAZ5ohWeXgwGs9faYAw5f_lgjd6";
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

           $(pic).text = "Upload Good";
           this.state.image = result[0].url;
         }
         console.log(error, result);
       }.bind(this),false);
  },

  render: function () {
    return(
      <form className="foodtruck-form form-horizontal" onSubmit={this.createFoodtruck}>

        <div className="form-group">
          <label htmlFor='foodtruck_title' className="col-sm-2 control-label">Food Truck Name:</label>
          <div className="col-sm-6">
            <input
            type='string'
            id='foodtruck_title'
            valueLink={this.linkState("title")}
            placeholder="By what glorious word or phrase will the hungry refer to you by?"
            className="form-control"
            />
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="form-group">
          <label htmlFor='foodtruck_description' className="col-sm-2 control-label">Description:</label>
          <div className="col-sm-6">
            <textarea
              type='text'
              id='foodtruck_description'
              valueLink={this.linkState("description")}
              placeholder="What are you about? What is this food about? What is life about???"
              className="form-control"
            />
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="form-group">
            <label htmlFor='foodtruck_end_date' className="col-sm-2 control-label">End Date:</label>
            <div className="col-sm-6">
              <input
                type='date'
                id='foodtruck_end_date'
                valueLink={this.linkState("end_date")}
                className="form-control"
              />
            </div>
            <div className="col-sm-1"></div>
        </div>

        <div className="form-group">
            <label htmlFor='foodtruck_funding_goal' className="col-sm-2 control-label">Funding Goal ($):</label>
          <div className="col-sm-6">
            <input
                type='number'
                min="0"
                id='foodtruck_funding_goal'
                valueLink={this.linkState("funding_goal")}
                placeholder="How much dough do you need to bake this food truck dream of yours?"
                className="form-control"
              />
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="form-group">
          <label htmlFor='foodtruck_category' className="col-sm-2 control-label">Category:</label>
          <div className="col-sm-6">
            <select id='foodtruck_category' className="form-control" valueLink={this.linkState("category")} >
              <option selected ="" >Select Your Food Truck Category</option>
              <option value="Hispanic" >Hispanic</option>
              <option value="Asian" >Asian</option>
              <option value="American" >American</option>
              <option value="Indian" >Indian</option>
              <option value="European" >European</option>
            </select>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="form-group">
          <label htmlFor='foodtruck_image' className="col-sm-2 control-label">Image:</label>
          <div className="col-sm-6">
          <button onClick={this._placeImage} id="pic" className="form-control">Upload Depiction of Deliciousness</button>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-6">
            <button className="form-control btn btn-danger">Create Food Truck!</button>
          </div>
          <div className="col-sm-1"></div>
        </div>


      </form>
    );
  }
});
