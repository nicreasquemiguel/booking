import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './containers/Home.jsx';
import Layout from './hocs/Layout.jsx';

// import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './containers/Login.jsx';
import Signup from './containers/Signup.jsx';
import ResetPassword from './containers/ResetPassword.jsx';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm.jsx';

const router = createBrowserRouter([{
  // path: '/',
  element: <Layout/>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },{
      path: '/login',
      element: <Login/>,
    },{
      path: '/signup',
      element: <Signup/>,
    }, {
      path: '/reset-password',
      element: <ResetPassword/>,
    }, {
      path: '/password/reset/password/confirm/:uid/token/',
      element: <ResetPasswordConfirm/>,
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
