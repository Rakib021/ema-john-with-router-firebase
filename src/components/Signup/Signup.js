import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Signup = () => {
    const [name,setName] = useState(" ");
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState(" ");
    const [confirmPassword,setConfirmPassword] = useState(" ");
    const [error,setError] = useState(" ");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user,loading] = useCreateUserWithEmailAndPassword(auth);


    const handleBlurName = event=>{
         setName(event.target.value);
    }
    const handleBlurEmail=event=>{
        setEmail(event.target.value);

    }
    const handleBlurPassword =event =>{
        setPassword(event.target.value);
    }
    const handleConfirmBlurPassword = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
 navigate('/shop');
    }

    const handleCreateUser = event=>{
        event.preventDefault();
        if(password!=confirmPassword){
            setError("Your two password did not matched");
            return;
        }
        
        if(password.length <6){
            setError("Your password must be 6 character or longer")
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className="form-signup-container">
           <div>
           <h2 className="form-title">Sign Up</h2>
           <form onSubmit={handleCreateUser} >
           <div className="input-group">
                <label htmlFor="text">Name</label>
                <input onBlur={handleBlurName} type="text" name="" id="" placeholder="enter your Name" required/>
            </div>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleBlurEmail} type="email" name="" id="" placeholder="enter your email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input onBlur={handleBlurPassword} type="password" name="password" id="" placeholder="enter your password" required/>
            </div>
            <div className="input-group">
                <label htmlFor="confirm password">Confirm password</label>
                <input onBlur={handleConfirmBlurPassword} type="password" name="password" id="" placeholder="enter your password" required/>
            </div>
            {
                loading&& <p>Loading ...</p>
            }

            <p style={{color:'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="sign up"/>
           </form>
           <p>
               Already have an account??<Link className="form-link" to="/login">Sign up</Link>

           </p>

           <div>
              
               <hr/><span className="extra">or</span>
           </div>
          <div className="google-submit-div">
             <button className="google-submit">Continue with Google</button>
          </div>
           
           </div>
        </div>
    );
};

export default Signup;