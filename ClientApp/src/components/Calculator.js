import React, { Component } from 'react';

export class Calculator extends Component {

    static displayName = Calculator.name;

    constructor(props) {
        super(props);

        this.state = { add: 1, mi: 1, mal: 1, divi: 1 };
        this.addition = this.addition.bind(this);


        this.minus = this.minus.bind(this);


        this.malti = this.malti.bind(this);


        this.division = this.division.bind(this);
    }

    addition() {
        this.setState({
            add: this.state.add + 5
        });
    }

    minus() {
        this.setState({
            mi: this.state.mi - 5
        });
    }

    malti() {
        this.setState({
            mal: this.state.mal * 5
        });
    }

    division() {
        this.setState({
            divi: this.state.divi / 5
        });
    }

    render() {
        return (
            <div>


                <div>
                    <h1>Add</h1>

                    <p>This is a simple example of a React component.</p>

                    <p aria-live="polite">Current count: <strong>{this.state.add}</strong></p>

                    <button className="btn btn-primary" onClick={this.addition}>Add</button>

                </div>


                <div>
                    <h1>Minus</h1>

                    <p>This is a simple example of a React component.</p>

                    <p aria-live="polite">Current count: <strong>{this.state.mi}</strong></p>

                    <button className="btn btn-primary" onClick={this.minus}>Minus</button>

                </div>


                <div>
                    <h1>Malti</h1>

                    <p>This is a simple example of a React component.</p>

                    <p aria-live="polite">Current count: <strong>{this.state.mal}</strong></p>

                    <button className="btn btn-primary" onClick={this.malti}>Malti</button>

                </div>


                <div>
                    <h1>Division</h1>

                    <p>This is a simple example of a React component.</p>

                    <p aria-live="polite">Current count: <strong>{this.state.divi}</strong></p>

                    <button className="btn btn-primary" onClick={this.division}>Division</button>

                </div>



            </div>
        );
    }

}