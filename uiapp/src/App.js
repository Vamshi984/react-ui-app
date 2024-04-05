import './App.css';
import LoginPage from './Componentss/LoginPage';
import SignupPage from './Componentss/SignupPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" Component={LoginPage} />
          <Route exact path="/signUp" Component={SignupPage} />
        </Routes>
      </Router>
  );
}

export default App;
