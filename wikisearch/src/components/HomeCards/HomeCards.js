import React from 'react';
import classes from './HomeCards.module.css';
import Card from '../UI/Card/Card';
const homeCards = () => {
    return (
        <div className={classes.Cards}>
            <Card title="NLP">
                We make use of Natural Language Processing Techniques to gather interesting 
                from a given Wikipedia page!
            </Card>
            <Card title="Unique">
                Every word search is made unique, which gives a user access to a limitless number of word searches 
            </Card>
            <Card title="Share">
                With an account, you can load and save your favorite word searches and even share with friends!
            </Card>
            <Card title="Customize">
                Craving a word search containing a tailored set of words? Use the build your own feature to use your own words!
            </Card>
        </div>
    );
};

export default homeCards;