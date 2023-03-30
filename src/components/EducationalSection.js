import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

class EducationalSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [],
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: '',
            filling: false
        }

        this.clickAdd = this.clickAdd.bind(this);

        this.editSchoolName = this.editSchoolName.bind(this);
        this.editTitleOfStudy = this.editTitleOfStudy.bind(this);
        this.editDateOfStudy = this.editDateOfStudy.bind(this);

        this.addNewExperience = this.addNewExperience.bind(this);
    }

    clickAdd() {
        this.setState({
            filling: true
        });
    }

    addNewExperience(evt) {
        evt.preventDefault();
        const exp = {
            schoolName: this.state.schoolName,
            titleOfStudy: this.state.titleOfStudy,
            dateOfStudy: this.state.dateOfStudy
        };
        const newArray = [...this.state.experiences, exp];
        this.setState({
            experiences: newArray,
            filling: false
        });
        console.log(this.state.experiences);
    }

    editSchoolName(evt) {
        this.setState({
            schoolName: evt.target.value
        });
    }

    editTitleOfStudy(evt) {
        this.setState({
            titleOfStudy: evt.target.value
        });
    }

    editDateOfStudy(evt) {
        this.setState({
            dateOfStudy: evt.target.value
        });
    }

    render() {
        const {schoolName, titleOfStudy, dateOfStudy, experiences} = this.state;
        const experienceList = experiences.map((experience, i) =>
            <li className="educationalElem" key={i}>
                <p className="schoolName"><span className="dataLabel">School: </span><span>{experience.schoolName}</span></p>
                <p class="titleOfStudy">{experience.titleOfStudy}</p>
                <p class="graduation"><span className="dataLabel">Graduation: </span><span>{experience.dateOfStudy}</span></p>
                <Button className="removeButton" text="Remove"/>
            </li>
        );
        return (
            <div className="Educational section">
                <SectionTitle title="Educational Experience"/>
                {this.state.filling ? 
                    <>
                        <ul>{experienceList}</ul>
                        <form onSubmit={this.addNewExperience}>
                            <ul>
                                <li>
                                    <label for="schoolName">School Name: </label>
                                    <input type="text" value={schoolName} onChange={this.editSchoolName} id="schoolName"></input>
                                </li>
                                <li>
                                    <label for="titleOfStudy">Title of Study: </label>
                                    <input type="text" value={titleOfStudy} onChange={this.editTitleOfStudy} id="titleOfStudy"></input>
                                </li>
                                <li>
                                    <label for="dateOfStudy">Graduation date: </label>
                                    <input type="date" value={dateOfStudy} onChange={this.editDateOfStudy} id="dateOfStudy"></input>
                                </li>
                            </ul>
                            <Button text="Confirm"/>
                        </form>
                    </>
                    :
                    <div className="experiencesDiv">
                        <ul>{experienceList}</ul>
                        <Button clickEvent={this.clickAdd} text="Add"/>
                    </div>
                }
            </div>
        );
    }
}

export default EducationalSection;