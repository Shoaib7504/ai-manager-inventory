import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;