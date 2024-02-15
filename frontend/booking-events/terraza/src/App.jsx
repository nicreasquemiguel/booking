import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
// import Facebook from './containers/Facebook';
// import Google from './containers/Google';
import Navbar from './components/Navbar'
import Layout from '/src/hocs/Layout';


function App() {



  return (
    <Provider store={store}>
      <Navbar/>
      <Outlet />
      {children}
    </Provider>
  )
}

export default App
