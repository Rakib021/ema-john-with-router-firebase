import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth);
    const [name,setName] = useState(" ");
    // const [email,setEmail] = useState(" ");
    const [address,setAddress] = useState(" ");
    const [phone,setPhone] = useState(" ");
    const [error,setError] = useState(" ");

    const handleBlurName = event=>{
        setName(event.target.value);
   }
  
   const handleBlurAddress =event =>{
       setAddress(event.target.value);
   }
   const handlePhoneBlur = event =>{
       setPhone(event.target.value);
   }

   const handleCreateUser = event=>{
    event.preventDefault();
    
}
    return (
        <div className="form-signup-container">
           <div>
           <h2 className="form-title">Shipping Information</h2>
           <form onSubmit={handleCreateUser} >
           <div className="input-group">
                <label htmlFor="text">Name</label>
                <input onBlur={handleBlurName} type="text" name="" id="" placeholder="enter your Name" required/>
            </div>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="" id="" placeholder="enter your email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="Address">Address</label>
                <input onBlur={handleBlurAddress} type="text" name="text" id="" placeholder="enter your Address" required/>
            </div>
            <div className="input-group">
                <label htmlFor="Phone">Phone</label>
                <input onBlur={handlePhoneBlur} type="text" name="phone" id="" placeholder="enter your phone" required/>
            </div>
            

            <p style={{color:'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping"/>
           </form>
           

           
           
           </div>
        </div>
    );
};

export default Shipment;