import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

import { getToken } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectedTo = '/auth',
  ...props
}) {
  const isLoggedIn = useSelector(getToken);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectedTo} />}
    </Route>
  );
}
