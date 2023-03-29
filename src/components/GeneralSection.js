import React, { Component } from 'react';
import SectionTitle from './SectionTitle';

class GeneralSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="General">
                <SectionTitle title="General Informations"/>
            </div>
        );
    }
}

export default GeneralSection;