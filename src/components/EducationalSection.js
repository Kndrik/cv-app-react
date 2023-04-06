import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { useState } from 'react';

export default function EducationalSection(props) {
    const [experiences, setExperiences] = useState([]);
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [filling, setFilling] = useState(false);

    function clickAdd() {
        setFilling(true);
    }

    function addNewExperience(evt) {
        evt.preventDefault();
        const exp = {
            schoolName: schoolName,
            titleOfStudy: titleOfStudy,
            dateOfStudy: dateOfStudy
        };
        const newArray = [...experiences, exp];
        setExperiences(newArray);
        setFilling(false);
    }

    function removeExperience(i) {
        setExperiences(experiences.filter(e => e != this.state.experiences[i]));
    }

    const experienceList = experiences.map((experience, i) =>
        <li className="educationalElem" key={i}>
            <p className="schoolName"><span className="dataLabel">School: </span><span>{experience.schoolName}</span></p>
            <p class="titleOfStudy">{experience.titleOfStudy}</p>
            <p class="graduation"><span className="dataLabel">Graduation: </span><span>{experience.dateOfStudy}</span></p>
            <Button clickEvent={() => removeExperience(i)} className="smallButton" text="Remove"/>
        </li>
    );

    return (
        <div className="Educational section">
            <SectionTitle title="Educational Experience"/>
            {filling ? 
                <>
                    <ul>{experienceList}</ul>
                    <form onSubmit={addNewExperience}>
                        <ul>
                            <li>
                                <label for="schoolName">School Name: </label>
                                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} id="schoolName"></input>
                            </li>
                            <li>
                                <label for="titleOfStudy">Title of Study: </label>
                                <input type="text" value={titleOfStudy} onChange={(e) => setTitleOfStudy(e.target.value)} id="titleOfStudy"></input>
                            </li>
                            <li>
                                <label for="dateOfStudy">Graduation date: </label>
                                <input type="date" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} id="dateOfStudy"></input>
                            </li>
                        </ul>
                        <Button text="Confirm"/>
                    </form>
                </>
                :
                <div className="experiencesDiv">
                    <ul>{experienceList}</ul>
                    <Button clickEvent={clickAdd} text="Add"/>
                </div>
            }
        </div>
    );
}