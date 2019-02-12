import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emojiSpin: "🚧",
            msg: "PÁGINA EN CONSTRUCCIÓN"
        }
    }

    render() {
        return (
            <section className="Main-App">
                <span className="Emoji">{this.state.emojiSpin}</span>
                <span>{this.state.msg}</span>
                <span className="Emoji">{this.state.emojiSpin}</span>
            </section>
        );
    }
}

export default App;
