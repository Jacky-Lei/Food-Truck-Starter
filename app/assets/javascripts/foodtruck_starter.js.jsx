$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var rootEl = document.getElementById('foodtruck');

  React.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
      </Route>
      <Route path="/foodtruck/:foodtruckId" component={FoodtruckDetail} />
    </Router>
  ), rootEl);
});
