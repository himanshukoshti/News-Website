import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-left">
                        <h2>RAPIDNEWS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias aut blanditiis totam quia enim, autem tenetur cum facere, fugit beatae at voluptas ipsum perferendis!</p>
                        <div className="social-icons">
                        <ul>
                            <li>
                                <a href="/"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="/"><i className="fab fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                    </div>

                    <div className="footer-right">
                        <h2>Newletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem!</p>

                        <div>
                            <input type="text" placeholder="Email Address"/>
                                <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                </div>

                <p>Copyright &copy; 2023 All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer