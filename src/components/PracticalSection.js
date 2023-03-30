import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

class PracticalSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [],
            companyName: '',
            jobTitle: '',
            tasks: '',
            from: '',
            to: '',
            filling: false
        };

        this.clickAdd = this.clickAdd.bind(this);

        this.addExperience = this.addExperience.bind(this);
    }

    clickAdd() {
        this.setState({
            filling: true
        });
    }

    addExperience(evt) {
        evt.preventDefault();
        const exp = {
            companyName: this.state.companyName,
            jobTitle: this.state.jobTitle,
            tasks: this.state.tasks,
            from: this.state.from,
            to: this.state.to
        };
        this.setState({
            experiences: [...this.state.experiences, exp],
            filling: false
        });
    }

    removeExperience(i) {
        this.setState({
            experiences: this.state.experiences.filter(e => e != this.state.experiences[i])
        });
    }

    render() {
        const {experiences, companyName, jobTitle, tasks, from, to} = this.state;
        const experiencesList = experiences.map((experience, i) => {
            return (
                <li className="practicalExperience">
                    <div className="jobTitle">{experience.jobTitle}</div>
                    <div className="companyName">{experience.companyName}</div>
                    <div className="tasks">{experience.tasks}</div>
                    <div className="dates">{experience.from} - {experience.to}</div>
                    <Button className="smallButton" text="Remove" clickEvent={() => this.removeExperience(i)}/>
                </li>
            );
        })
        return (
            <div className="Practical section">
                <SectionTitle title="Practical Experience"/>
                {
                    this.state.filling ?
                    <>
                        <ul>{experiencesList}</ul>
                        <form onSubmit={this.addExperience}>
                            <ul>
                                <li>
                                    <label for="companyName">Company Name: </label>
                                    <input type="text" id="companyName" value={companyName} onChange={e => this.setState({companyName: e.target.value})}></input>
                                </li>
                                <li>
                                    <label for="jobTitle">Title: </label>
                                    <input type="text" id="jobTitle" value={jobTitle} onChange={e => this.setState({jobTitle: e.target.value})}></input>
                                </li>
                                <li>
                                    <label for="tasks">Job description: </label>
                                    <textarea rows="4" cols="26" id="tasks" value={tasks} onChange={e => this.setState({tasks: e.target.value})}></textarea>
                                </li>
                                <li>
                                    <label for="from">From: </label>
                                    <input type="date" id="from" value={from} onChange={e => this.setState({from: e.target.value})}></input>
                                </li>
                                <li>
                                    <label for="to">To: </label>
                                    <input type="date" id="to" value={to} onChange={e => this.setState({to: e.target.value})}></input>
                                </li>
                            </ul>
                            <Button text="Confirm"/>
                        </form>
                    </>
                    :
                    <>
                        <ul>{experiencesList}</ul>
                        <Button clickEvent={this.clickAdd} text="Add"/>
                    </>
                }
            </div>
        );
    }
}

export default PracticalSection;