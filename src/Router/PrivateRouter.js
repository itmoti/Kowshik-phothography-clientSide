import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const PrivateRouter = ({children}) => {
   const { loading} = useContext(UserContext)
   
   if(!loading) {
      return children
   }
   else {
    return <Navigate  to ={'/login'}></Navigate>
   }
};

export default PrivateRouter;