import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

  // Is autheiticated
  // redirect home page
if(isAuthenticated){
  return <Navigate to='/' />
}

  return (
    <div className='container mt-5 w-full max-w-xs'>
      <h1>Login</h1>
      <p>Sign into your account</p>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' method='POST' onSubmit={e => onSubmit(e)}>
          <div className='f'>      
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Email'
              id= 'email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
              autoComplete='on' 
            />
        </div>


        <div className='my-5'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            type='password'
            placeholder='**********'
            id='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
            minLength='4'
            autoComplete='on' 
            />
        </div>
        
        <div className="flex items-center justify-between">
        <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LOG  IN</button>          

        {/* <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SIGN UP</button> */}
          
        </div>

        <p className='mt-3 container'>
          Forgot your password? <br/><Link to='/reset-password'>Reset Password</Link>
        </p>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  isAutheticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)