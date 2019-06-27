import React from 'react';
import "../App.css";

const Header = props => (

    <nav className="navigation">
            <img src={require('./whisk.png')} alt="sample87"/>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        
    </nav>

);

export default Header;