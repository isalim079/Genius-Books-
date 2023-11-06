/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <span className="loading loading-ring  h-screen flex justify-center items-center w-36"></span>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
