import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate= useNavigate();

    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;