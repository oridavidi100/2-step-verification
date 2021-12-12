import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const twoStep = () => {
    // if ('yakov' === 'yakov')
    navigate('/VerificationPage');
  };
  return (
    <div>
      <button onClick={twoStep}>setting</button>
    </div>
  );
}

export default Home;
