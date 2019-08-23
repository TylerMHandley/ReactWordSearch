import React from 'react';
import classes from './Card.module.css';
const card = props => {
    let title = null;
    if (props.title) {
        title = (
            <div className={classes.TitleBlock}>
                <h2> {props.title} </h2>
            </div> 
        );
    }
    return (
        <div className={classes.Card}>
            {title}
            {props.children}
        </div>
    );
};

export default card;