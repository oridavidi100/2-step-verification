import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import VerificationPage from './components/verificationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
function App() {
  const [user, setuser] = useState('');
  // const [img, setimg] = useState('');
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login setuser={setuser} />} />
          <Route path='/Home' element={<Home user={user} />} />
          <Route path='/VerificationPage' element={<VerificationPage user={user} />} />
          <Route path='/register' element={<Register setuser={setuser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
