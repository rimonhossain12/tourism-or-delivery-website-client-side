import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Banner from './Components/Home/Banner/Banner';
import Header from './Components/Home/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Blog from './Components/Blog/Blog';
import Place from './Components/Place/Place';
import Login from './Components/shared/Login/Login';



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
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
