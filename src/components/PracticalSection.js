import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function PracticalSection(props) {
    const [experiences, setExperiences] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [tasks, setTasks] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [filling, setFilling] = useState(false);

    function clickAdd() {
        setFilling(true);
    }

    function addExperience(evt) {
        evt.preventDefault();
        const exp = {
            companyName: companyName,
            jobTitle: jobTitle,
            tasks: tasks,
            from: from,
            to: to
        };
        setExperiences([...experiences, exp]);
        setFilling(false);
    }

    function removeExperience(i) {
        setExperiences(experiences.filter(e => e != experiences[i]));
    }

    const experiencesList = experiences.map((experience, i) => {
        return (
            <li className="practicalExperience">
                <div className="jobTitle">{experience.jobTitle}</div>
                <div className="companyName">{experience.companyName}</div>
                <div className="tasks">{experience.tasks}</div>
                <div className="dates">{experience.from} - {experience.to}</div>
                <Button className="smallButton" text="Remove" clickEvent={() => removeExperience(i)}/>
            </li>
        );
    });

    return (
        <div className="Practical section">
            <SectionTitle title="Practical Experience"/>
            {
                filling ?
                <>
                    <ul>{experiencesList}</ul>
                    <form onSubmit={addExperience}>
                        <ul>
                            <li>
                                <label for="companyName">Company Name: </label>
                                <input type="text" id="companyName" value={companyName} onChange={e => setCompanyName(e.target.value)}></input>
                            </li>
                            <li>
                                <label for="jobTitle">Title: </label>
                                <input type="text" id="jobTitle" value={jobTitle} onChange={e => setJobTitle(e.target.value)}></input>
                            </li>
                            <li>
                                <label for="tasks">Job description: </label>
                                <textarea rows="4" cols="26" id="tasks" value={tasks} onChange={e => setTasks(e.target.value)}></textarea>
                            </li>
                            <li>
                                <label for="from">From: </label>
                                <input type="date" id="from" value={from} onChange={e => setFrom(e.target.value)}></input>
                            </li>
                            <li>
                                <label for="to">To: </label>
                                <input type="date" id="to" value={to} onChange={e => setTo(e.target.value)}></input>
                            </li>
                        </ul>
                        <Button text="Confirm"/>
                    </form>
                </>
                :
                <>
                    <ul>{experiencesList}</ul>
                    <Button clickEvent={clickAdd} text="Add"/>
                </>
            }
        </div>
    );
}