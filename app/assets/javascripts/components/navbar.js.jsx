var Link = ReactRouter.Link;
var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;
var NavBar = ReactBootstrap.NavBar;
var NavItem = ReactBootstrap.NavItem;
var NavBrand = ReactBootstrap.NavBrand;
var Nav = ReactBootstrap.Nav;


window.Navbar = React.createClass({
  mixins: [ReactRouter.History],

  loginHandler: function () {
    var user = {username: "Guest", password: "password"};
    ApiUtil.logInGuest(user);
  },

  signout: function(){
  window.SessionUtil.logOut();
},

  exploreHandler: function () {
    ApiUtil.fetchAllFoodTrucks();
    if(window.location.hash.indexOf("foodtruck") !== -1)
    {window.location = "/";}
  },

  render: function (){

    if (window.CURRENT_USER_ID) {
      return(
        <nav className="navbar navbar-default">
          <div className="container-fluid">



            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand nav navbar-nav" href="#">
                <Link to="/"><img className="main-logo"
                  src="http://res.cloudinary.com/akantoword/image/upload/v1445582305/JACKY_LOGO1_oevcit.png"/>
                </Link>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav dropdown">

                <li className="nav-bar-links"><a onClick={this.exploreHandler}>Explore All Food Trucks</a></li>
                <li className="nav-bar-links"><Link to="/createfoodtruck">Start a Food Truck</Link></li>

              </ul>

              <ul className="nav navbar-nav navbar-right">

                  <li className="navbar-profile-name">Logged In As: {window.CURRENT_USER_USERNAME}</li>
                  <Button onClick={this.signout} className="navbar-log-out-button">
                  <Glyphicon glyph="log-out" /> Log Out
                  </Button>


              </ul>
            </div>
          </div>
        </nav>

        );


    } else {



      return(
        <nav className="navbar navbar-default">
          <div className="container-fluid">



            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand nav navbar-nav" href="#">
                <Link to="/"><img className="main-logo"
                  src="http://res.cloudinary.com/akantoword/image/upload/v1445582305/JACKY_LOGO1_oevcit.png"/>
                </Link>
              </a>
            </div>



            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav dropdown">

                <li className="nav-bar-links"><a onClick={this.exploreHandler}>Explore All Food Trucks</a></li>
                <li className="nav-bar-links"><Link to="/createfoodtruck">Start a Food Truck</Link></li>

              </ul>

              <ul className="nav navbar-nav navbar-right">


                <li className="nav-bar-links"><a href="/users/new">Sign Up</a></li>
                <li className="nav-bar-links"><a href="/session/new">Log In</a></li>
                <li className="nav-bar-links"><a onClick={this.loginHandler}>Guest Log In</a></li>


              </ul>
            </div>
          </div>
        </nav>




      );



    }

  },
});
