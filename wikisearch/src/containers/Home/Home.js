import React, { Component, Fragment } from 'react';
//import classes from './Home.module.css';
import HomeCards from '../../components/HomeCards/HomeCards'
import Button from '../../components/UI/Button/Button';
class Home extends Component {
    buttonClickedHandler = () => {
        this.props.history.push('/generate');
    }
    render() {
        return (
            <Fragment>
                <h1> Welcome to WikiSearch! </h1>
                <HomeCards />
                <Button clicked={this.buttonClickedHandler}>
                    Make a Word Search
                </Button>
            </Fragment>
        );
    }
}

export default Home;