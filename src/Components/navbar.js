import React, {useState} from 'react'

import "./navbar.css"
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className='main-nav'>
                {/* logo part */}
                <div className='logo'>
                    <h2>
                        <span>F</span>unction
                        <span>U</span>p
                    </h2>
                </div>
                {/* menu part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
                {/* media links */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li>
                            <a href='https://www.facebook.com/functionup' target="_functionUp" >
                                <FaFacebook className='facebook' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/functionup_official/?hl=en' target="_functionUp" >
                                <FaInstagram className='instagram' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/c/functionup' target="_functionUp" >
                                <FaYoutube className='youtube' />
                            </a>
                        </li>
                    </ul>
                      {/* hamburget menu start  */}
                        <div className="hamburger-menu">
                             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                <GiHamburgerMenu />
                            </a>
                         </div>
                </div>
            </nav>

            {/* intro section */}
            <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Function Up</h1>
            </section>
        </>
    )
}

export default Navbar


