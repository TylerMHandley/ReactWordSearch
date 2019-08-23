import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavBarItem.module.css';
const navBarItem = props => {
    return (
        <li className={classes.NavBarItem}>
            <NavLink 
                to={props.link}
                exact 
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default navBarItem;