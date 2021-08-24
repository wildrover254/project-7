import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/fish'>Fish</NavLink></li>
                <li><NavLink to='/goats'>Goats</NavLink></li>
                <li><NavLink to='/ducks'>Ducks</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;