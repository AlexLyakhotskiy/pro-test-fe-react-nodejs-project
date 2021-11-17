import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { apiToken } from '../utils/apiServices';
import { getToken } from '../redux/auth/auth-selectors';

import Header from './Header/Header';
import Main from './Main/Main';
// import Footer from './Footer/Footer';

function App() {
  const accessToken = useSelector(getToken);
  useEffect(() => {
    if (accessToken) {
      apiToken.set(accessToken);
    }
  }, [accessToken]);
  return (
    <>
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default App;
