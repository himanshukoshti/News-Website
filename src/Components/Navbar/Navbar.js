import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const btnHam = document.querySelector('.ham-btn');
    const btnTimes = document.querySelector('.times-btn');
    const navBar = document.getElementById('nav-bar');

    const btnHamClick = () => {
        if(btnHam.className !== ''){
            btnHam.style.display = "none";
            btnTimes.style.display = "block";
            navBar.classList.add("show-nav");
        }
    }

    const btnTimesClick = () => {
        if(btnHam.className !== ''){
            btnTimes.style.display = "none";
            btnHam.style.display = "block";
            navBar.classList.remove("show-nav");
        }
    }

    return (
        <>
            <header>
                <div className="navigation-container">
                    <div className="top-head">
                        <div className="web-name">
                            <h1>RAPIDNEWS</h1>
                        </div>

                        <div className="ham-btn" onClick={btnHamClick}>
                            <span>
                                <i className="fas fa-bars"></i>
                            </span>
                        </div>

                        <div className="times-btn" onClick={btnTimesClick}>
                            <span>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                    </div>

                    {/* Navbar */}

                    <div className="nav-bar" id="nav-bar">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={'/'}>Home</NavLink>
                                </li>
                                <li><a href="/">current affairs</a></li>
                                <li><a href="/">archive</a></li>
                                <li><a href="/">featured</a></li>
                                <li><a href="/">broadcast</a></li>
                                <li><a href="/">category</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar