import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;