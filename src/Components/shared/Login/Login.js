import React from 'react';
import Footer from '../../Footer/Footer';
import { useHistory, useLocation } from 'react-router';
import { AiFillGoogleCircle } from "react-icons/ai";
import Header from '../../Home/Header/Header';
import warningImg from '../../../images/place/login.jpg'
import './Login.css';
import useAuth from '../../../../src/hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();

    // redirect for writing this code
   
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || "/home";

    const loginWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="container mt-5 mb-5">
               <div className="warning-style">
                    <img className="waring-img" src={warningImg} alt="not found images" /> <br />
                    <h4 className="text-primary">Please Login</h4>
                    <button onClick={loginWithGoogle} type="button" class="btn btn-primary badge rounded-pill text-center"><AiFillGoogleCircle className="fs-1 text-light" />Google Sign In</button>
               </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Login;