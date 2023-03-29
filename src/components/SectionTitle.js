import React, { Component } from 'react';

class SectionTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <h2>{title}</h2>
        );
    }
}

export default SectionTitle;