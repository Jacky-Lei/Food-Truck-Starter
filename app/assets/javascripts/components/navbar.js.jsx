window.Navbar = React.createClass({
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
              <a className="navbar-brand" href="#">Food Truck Starter</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Explore Food Trucks <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Start A Food Truck</a></li>

              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li onClick={SessionUtil.logOut} ><a href="">Log Out</a></li>
                <li><a href="#">Profile</a></li>

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
              <a className="navbar-brand" href="#">Food Truck Starter</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Explore Food Trucks <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Start A Food Truck</a></li>

              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><a href="/users/new">Sign Up</a></li>
                <li><a href="/session/new">Log In</a></li>
                <li><a href="#">Guest Log In</a></li>

              </ul>
            </div>
          </div>
        </nav>

      );



    }

  },
});
