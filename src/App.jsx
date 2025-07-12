import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import Login from './pages/Login/Login';
import SignUpPage from './pages/SignUp/SignUp';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App