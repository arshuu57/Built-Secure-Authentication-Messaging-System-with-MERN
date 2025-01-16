// import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Register from './Components/Signup/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
     <Navbar  title='Navbar' About='about'/>
     
      <Routes>
      <Route exact path="/"  element={<Home/>}></Route> 
      <Route exact path="/About"  element={<About/>}></Route> 
      <Route exact path="/message"  element={<Contact/>}></Route> 
      <Route exact path="/register"  element={<Register/>}></Route> 
      <Route exact path="/login"  element={<Login/>}></Route> 
      <Route exact path="/logout"  element={<Logout/>}></Route> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
