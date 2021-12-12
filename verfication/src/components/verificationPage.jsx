import axios from 'axios';
import { React, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VerificationPage({ user }) {
  const [error, seterror] = useState('');
  const navigate = useNavigate();
  const num = useRef('');
  const verify = async () => {
    try {
      let response = await axios.get(`http://localhost:8080/login/verify/${user.Secret.secret}/${num.current.value}`);
      console.log(response.data);
      if (response.data === true) {
        navigate('/Home');
      }
    } catch (err) {
      seterror(err.response.data.error);
    }
  };
  return (
    <div>
      <form>
        <img src={user.Secret.qr} alt='BigCo Inc. logo' />
        <input type='text' ref={num}></input>
        <button type='button' onClick={verify}>
          {' '}
          &#9989;
        </button>
        <p>{error}</p>
      </form>
      <h4>
        If you dont have authenticator app, you can install here easily
        <br />
        <a target='_blank' href='https://apps.apple.com/us/app/google-authenticator/id388497605' rel='noreferrer'>
          install for App Store
        </a>{' '}
        <br />
        <a
          target='_blank'
          href={'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US'}
          rel='noreferrer'
        >
          install for Android
        </a>
      </h4>
    </div>
  );
}

export default VerificationPage;
