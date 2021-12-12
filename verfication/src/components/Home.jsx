import React from 'react';

function Home() {
  const twoStep = () => {
    console.log('step');
  };
  return (
    <div>
      <button onClick={twoStep}>setting</button>
    </div>
  );
}

export default Home;
