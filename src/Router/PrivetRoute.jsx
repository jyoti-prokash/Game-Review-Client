import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    
    //  if (!user) {
    //     return <Navigate state={location.pathname} to="/login"></Navigate>;
    // }
    return (
    <Navigate to="/login"></Navigate>
    )
};

export default PrivetRoute;