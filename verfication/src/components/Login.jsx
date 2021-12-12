import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
function Login() {
  const navigate = useNavigate();
  const username = useRef('nitialValue');
  const Password = useRef('initialValue');
  const submit = () => {
    console.log(username.current.value, Password.current.value);
    if (username.current.value === Password.current.value) navigate('/Home');
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

        <button type='button' className='btn btn-primary btn-block' onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
