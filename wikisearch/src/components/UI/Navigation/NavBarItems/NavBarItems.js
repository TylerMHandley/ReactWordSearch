import React from 'react';
import NavBarItem from './NavBarItem/NavBarItem';
import classes from './NavBarItems.module.css';
const navBarItems = () => {
    return (
        <ul className={classes.NavBarItems}>
            <NavBarItem link='/'>Home</NavBarItem>
            <NavBarItem link='/w'>Word Searches</NavBarItem>
            <NavBarItem link='/generate'>Generate</NavBarItem>
            <NavBarItem link='/login'>Sign up/Log in</NavBarItem>
        </ul>
    );
};

export default navBarItems;