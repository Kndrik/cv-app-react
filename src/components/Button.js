import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { clickEvent, text } = this.props;
        return (
            <button onClick={clickEvent}>{text}</button>
        );
    }
}

export default Button;