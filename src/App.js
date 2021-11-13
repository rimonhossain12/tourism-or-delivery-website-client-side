import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './Components/Home/Banner/Banner';
import Header from './Components/Home/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Blog from './Components/Blog/Blog';
import Place from './Components/Place/Place';
import Login from './Components/shared/Login/Login';
import NotFound from './Components/shared/NotFound/NotFound';
import Order from './Components/Order/Order';
import Service from './Components/Home/Service/Service';
import UserFrom from './Components/Home/UseFrom/UserFrom';
import PlaceOrder from './Components/Home/PlaceOrder/PlaceOrder';
import Booking from './Components/Home/Booking/Booking';


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
            <Route exact path="/service/:serviceId">
              <Service></Service>
            </Route>
            <Route path="/order">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/service">
              <UserFrom></UserFrom>
            </Route> */}
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
