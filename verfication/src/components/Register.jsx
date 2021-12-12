import { React, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/register.css';

const axios = require('axios');

function Register(props) {
  const navigate = useNavigate();
  const [error, seterror] = useState('');
  const username = useRef('');
  const email = useRef('');
  const password = useRef('');

  const register = async () => {
    try {
      let response = await axios.post('http://localhost:8080/register', {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      console.log(response);
      if (response.data.ans === 'yes') {
        console.log(JSON.stringify(response.data.newUser.Secret.qr));
        props.setuser(response.data.newUser);
        // props.setimg(response.data.newUser.Secret.qr);
        navigate('/VerificationPage');
      }
    } catch (err) {
      seterror(err.massage);
    }
  };
  return (
    <form>
      <h3>Sign Up</h3>

      <div className='form-group'>
        <label>username</label>
        <input type='text' className='form-control' placeholder='username' ref={username} />
      </div>

      <div className='form-group'>
        <label>Email address</label>
        <input type='email' className='form-control' placeholder='Enter email' ref={email} />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input type='password' className='form-control' placeholder='Enter password' ref={password} />
      </div>

      <p>{error}</p>
      <button type='button' onClick={register} className='btn btn-primary btn-block'>
        Sign Up
      </button>
      <p className='forgot-password text-right'>
        Already registered <Link to='/'>sign in</Link>?
      </p>
    </form>
  );
}

export default Register;
