import React, { Component } from 'react';
import NavBar from '../../components/UI/Navigation/NavBar/NavBar'
import classes from './Layout.module.css';
class Layout extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;