var Link = ReactRouter.Link;
var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;

window.Navbar = React.createClass({
  mixins: [ReactRouter.History],

  loginHandler: function () {
    var user = {username: "Guest", password: "password"};
    ApiUtil.logInGuest(user);
  },

  signout: function(){
  window.SessionUtil.logOut();
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
              <ul className="nav navbar-nav">
                <li>
              <Link to="/"><img className="main-logo" src="http://res.cloudinary.com/akantoword/image/upload/v1445582305/JACKY_LOGO1_oevcit.png" /></Link>

              </li>
              </ul>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/indexfoodtruck">Explore All Food Trucks</Link></li>
                <li><Link to="/createfoodtruck">Start a Food Truck</Link></li>

              </ul>

              <ul className="nav navbar-nav navbar-right">

                <div className="navbar-profile-name">Logged In As: {window.CURRENT_USER_USERNAME}</div>
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
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/"><img className="main-logo" src="http://res.cloudinary.com/akantoword/image/upload/v1445407180/Screen_Shot_2015-10-20_at_10.58.52_PM_m8g1me.png" /></Link>
              </li>
              </ul>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/indexfoodtruck">Explore All Food Trucks</Link></li>
                <li><a href="/session/new">Start A Food Truck</a></li>

              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><a href="/users/new">Sign Up</a></li>
                <li><a href="/session/new">Log In</a></li>
                <li><a onClick={this.loginHandler}>Guest Log In</a></li>



              </ul>
            </div>
          </div>
        </nav>

      );



    }

  },
});
