import axios from 'axios';
import { React, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
function Home({ user }) {
  const verificationInput = useRef(1);
  // const navigate = useNavigate();
  const twoStep = async () => {
    console.log(user.username);
    let response = await axios.get(
      `http://localhost:8080/login/twoPass/${user.username}/${verificationInput.current.value}`
    );
    console.log(verificationInput.current.value);
  };
  return (
    <div>
      <button onClick={twoStep}>setting</button>
      <div>
        <label className='screen-reader-only' htmlFor='choice'>
          verification?
        </label>
        <br />
        <span aria-hidden='true'>No</span>
        <input
          className='verificationInput'
          ref={verificationInput}
          type='range'
          max='1'
          id='choice'
          name='choice'
        ></input>
        <span aria-hidden='true'>Yes</span>
      </div>
    </div>
  );
}

export default Home;
