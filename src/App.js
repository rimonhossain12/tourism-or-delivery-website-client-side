import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Blog from './Components/Blog/Blog';
import Place from './Components/Place/Place';
import Login from './Components/shared/Login/Login';
import NotFound from './Components/shared/NotFound/NotFound';
import Service from './Components/Home/Service/Service';
import PlaceOrder from './Components/Home/PlaceOrder/PlaceOrder';
import Booking from './Components/Home/Booking/Booking';
import PrivateRoute from './Components/shared/PrivateRoute/PrivateRoute';
import About from './Components/About/About';
import ShowService from './Components/Home/ShowService/ShowService';
import MangeOrder from './Components/Home/MangeOrder/MangeOrder';
import AddService from './Components/AddService/AddService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/place">
              <Place></Place>
            </Route>
            <Route path="/service/:serviceId">
              <Service></Service>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/showService">
              <ShowService></ShowService>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/order">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/mangeOrder">
              <MangeOrder></MangeOrder>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
/* 
ServicesCollection
*/
export default App;
