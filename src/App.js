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


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Home></Home>
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
