import about from './CssFiles/AboutMe.module.css';
import './App.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../src/Components/Navbar'

function App() {
  
  return (
    <div>
       <Navbar/>

<h1 className={about.aboutHead}>About Me</h1>

<div className={about.Suman}>
      <img className={about.mainImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFa9uNHiSy_9IPJmnFNEiM0pQCeIUG4SyMw&usqp=CAU" alt="image" />
      
      <h2 className={about.name}>Suman Kumar Sharma</h2>
      <h3 className={about.content}>Hey , welcome to the my portfolio website, I am from West-Champaran , Bihar . I have completed my BCA degree in year 2019 from BRABU , Bihar with an aggregate of 70%</h3>
</div>


<div className={about.cards}>

<div className={about.ageLocation}>
      <p >Age 24</p>
      <p>Location - Bettiah, Bihar</p>

</div>

    <div className={about.cards1}>
        <h4>What are your skills</h4>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
    <div className={about.cards2}>
    <h4 >What are your hobbies</h4>
    <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
    <div className={about.cards3}>
    <h4 >What are your Learning</h4>
    <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
</div>
    </div>
  );
}

export default App;