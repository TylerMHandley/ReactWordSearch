import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import WikiForm from './WordSearchData/WikiForm';
import CustomForm from './WordSearchData/CustomForm';
import classes from './Generator.module.css';
class Generator extends Component {
    state = {
        currentBlock: 0,
    }

    accordionClickHandler = blockID => {
        let newId = blockID !== this.state.currentBlock  ? blockID: 0;
        this.setState({ currentBlock: newId });
    }
    render() {

        return (
            <div className={classes.Generator}>
                <h1> Generator </h1>
                <div>
                    <Button clicked={() => this.accordionClickHandler(1)}> From Wikipedia</Button>
                    {this.state.currentBlock === 1 ? <WikiForm /> : null}
                </div>
                <div>
                    <Button clicked={() => this.accordionClickHandler(2)}> Custom</Button>
                    {this.state.currentBlock === 2 ? <CustomForm /> : null}
                </div>

            </div>
        );
    }
}

export default Generator;