import Home from './components/Home';
import Login from './components/Login';
import VerificationPage from './components/verificationPage';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Login />
      <Home />
      <VerificationPage />
    </div>
  );
}

export default App;
