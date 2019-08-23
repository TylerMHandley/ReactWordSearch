import React from 'react';
import NavBarItems from '../NavBarItems/NavBarItems';
import classes from './NavBar.module.css';
const navBar = () => {
    return (
        <header className={classes.NavBar}>
            <nav>
                <NavBarItems />
            </nav>
        </header>
    );
};

export default navBar;