import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Authcontex } from '../Contex/Authcontex';
import Loading from '../components/Loading/Loading';

const Privateroute = ({children}) => {
    const location=useLocation()
    const{user,loading}=use(Authcontex)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.photoURL){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;