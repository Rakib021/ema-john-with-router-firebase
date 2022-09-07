import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Signup from '../Signup/Signup';
import './Login.css';


const Login = () => {
    const [create,setCreate] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
          navigate(from,{replace:true});
      }


      const googleProvider = new GoogleAuthProvider(auth);

      const handleGoogleSignIn=()=>{
          signInWithPopup(auth,googleProvider)
          .then(result =>{
            const create = result.create;
            setCreate(create);
            console.log(result.create);
          })
          .catch(error=>{
            console.log(error);
          })
          
          }

    const handleEmailBlur =event=>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleSignIn=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
       
    }
    return (
        <div className="form-container">
           <div>
           <h2 className="form-title">Login</h2>
           <form onSubmit={handleSignIn}>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder="enter your email" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder="enter your password" required/>
            </div>

            {
                loading&& <p>Loading ...</p>
            }
            <p style={{color:'red'}}>{error?.message}</p>
            <input className="form-submit" type="submit" value="Login" required/>
           </form>
           <p>
               New to Ema-john?<Link className="form-link" to="/signup">Create an account</Link>

           </p>

           <div>
              
               <hr/><span className="extra">or</span>
           </div>
          <div className="google-submit-div">
             <button onClick={handleGoogleSignIn} className="google-submit">Continue with Google</button>
          </div>
           
           </div>
        </div>
    );
};

export default Login;