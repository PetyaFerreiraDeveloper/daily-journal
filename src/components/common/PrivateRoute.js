import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


const PrivateRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  if (!user.email) {
    return <Navigate to="/register" replace />
  }

  return children;

}

export default PrivateRoute;