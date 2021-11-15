import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

// import {  } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  redirectedTo = 'smth',
  restricted = false,
  ...props
}) {
  const isLoggedIn = useSelector();
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...props}>
      {shouldRedirect ? <Redirect to={redirectedTo} /> : children}
    </Route>
  );
}
