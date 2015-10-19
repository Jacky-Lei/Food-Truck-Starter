$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('foodtruck');

  React.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
        <Route path="/createfoodtruck" component={FoodtruckForm} />
        <Route path="/indexfoodtruck" component={FoodtruckIndex} />
        <Route path="/foodtruck/:foodtruckId" component={FoodtruckDetail} />
      </Route>

    </Router>
  ), rootEl);
});
