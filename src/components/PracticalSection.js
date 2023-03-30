import React, { Component } from 'react';
import SectionTitle from './SectionTitle';

class PracticalSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Practical section">
                <SectionTitle title="Practical Experience"/>
            </div>
        );
    }
}

export default PracticalSection;