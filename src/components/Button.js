import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { clickEvent, text, className } = this.props;
        return (
            <button onClick={clickEvent} className={className}>{text}</button>
        );
    }
}

export default Button;