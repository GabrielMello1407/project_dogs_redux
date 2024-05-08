import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
  const { data } = useSelector((state) => state.user);

  if (data === true) return <Route {...props} />;
  else if (data === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
