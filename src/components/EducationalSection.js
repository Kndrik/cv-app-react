import React, { Component } from 'react';
import SectionTitle from './SectionTitle';

class EducationalSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Educational">
                <SectionTitle title="Educational Experience"/>
            </div>
        );
    }
}

export default EducationalSection;