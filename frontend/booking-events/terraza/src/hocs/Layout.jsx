import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import App from '../App';
import Navbar from '../components/Navbar';
import { checkAuthenticated, load_user } from '../actions/auth'
import store from '../store';


const Layout = ({ checkAuthenticated, load_user, children }) => {

  useEffect(() =>{
    checkAuthenticated()
    load_user()
  }, [])

  return (
    <Provider store={store}>
        <App/>
        <Outlet />
        {children}
    </Provider>

  )
}

export default connect(null, {checkAuthenticated, load_user })(Layout)