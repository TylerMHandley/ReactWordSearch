import React, { Component } from 'react';

class WikiForm extends Component {
    state = {
        topic: {
            elementType: 'input',
            elementConfig: {
                value: '',
                validation: {
                    required: true,
                    minLength: 1
                },
                valid: false,
                touched: false,
            }
        },
        wordCount: {
            elementType: 'input',
            elementConfig: {
                value: null,
                validation: {
                    required: true,
                    minLength: 1
                },
                valid: false,
                touched: false
            }
        },
        gridSize: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 30, displayValue: '30x30 Grid'},
                    {value: 50, displayValue: '50x50 Grid'},
                    {value: 70, displayValue: '70x70 Grid'},
                ],
                validation: {

                },
                valid: true
            }

        }

    }
    
    render() {
        return (
            <div>
                <h1> Wiki Form</h1>
            </div>
        );
    }
}

export default WikiForm;