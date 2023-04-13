import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from './Account';

function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Logo" />
                        <h3>React Quiz</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav >
    )
}

export default Nav