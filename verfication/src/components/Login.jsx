import axios from 'axios';
import { React, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/Login.css';
function Login(props) {
  const [error, seterror] = useState('');
  const navigate = useNavigate();
  const username = useRef('nitialValue');
  const Password = useRef('initialValue');
  const submit = async () => {
    try {
      let response = await axios.get(`http://localhost:8080/login/${username.current.value}/${Password.current.value}`);
      console.log(response.data.user.twoPass);
      if (response.data.ans === 'yes') {
        props.setuser(response.data.user);
        if (response.data.user.twoPass === true) {
          // props.user.Secret.qr = null;
          navigate('/VerificationPage');
        } else {
          navigate('/Home');
        }
      }
    } catch (err) {
      seterror(err.message);
    }
  };
  return (
    <div>
      {' '}
      <form>
        <h3>logIn</h3>
        <div className='form-group'>
          <label>username </label>
          <input type='username ' className='form-control' placeholder='Enter username ' ref={username} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='Enter password' ref={Password} />
        </div>
        <p>{error}</p>
        <button type='button' className='btn btn-primary btn-block' onClick={submit}>
          Submit
        </button>
        <p>
          need to <Link to='/register'>register</Link>?
        </p>
      </form>
    </div>
  );
}

export default Login;
