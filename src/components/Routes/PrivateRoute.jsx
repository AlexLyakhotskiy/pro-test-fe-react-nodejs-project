// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Redirect, Route } from 'react-router';

// // import {  } from '../../redux/auth/auth-selectors';

// export default function PrivateRoute({
//   children,
//   redirectedTo = 'smth',
//   ...props
// }) {
//   const isLoggedIn = useSelector();

//   return (
//     <Route {...props}>
//       {isLoggedIn ? children : <Redirect to={redirectedTo} />}
//     </Route>
//   );
// }
