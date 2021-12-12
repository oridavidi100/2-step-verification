import Home from './components/Home';
import Login from './components/Login';
import VerificationPage from './components/verificationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/VerificationPage' element={<VerificationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
