import './App.css';
import Navbar from './Navbar'
import {Route, Routes} from 'react-router-dom'
import Contact from './AllRoughts/Contact';
import Login from './AllRoughts/Login';
import Home from './AllRoughts/Home';
import About from './AllRoughts/About';

function App() {
  return (
    <div >
     <Navbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/logIn' element = {<Login />} />
      </Routes>

    </div>
  );
}

export default App;
