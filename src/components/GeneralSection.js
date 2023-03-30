import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { click } from '@testing-library/user-event/dist/click';

class GeneralSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filled: false,
            filling: false,
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };

        this.clickAdd = this.clickAdd.bind(this);

        this.updateLastName = this.updateLastName.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePhone = this.updatePhone.bind(this);

        this.submitInformations = this.submitInformations.bind(this);

        this.editInformations = this.editInformations.bind(this);
    }

    updateLastName(evt) {
        this.setState({
            lastName: evt.target.value
        });
    }

    updateFirstName(evt) {
        this.setState({
            firstName: evt.target.value
        });
    }

    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    }

    updatePhone(evt) {
        this.setState({
            phone: evt.target.value
        });
    }

    clickAdd() {
        this.setState({
            filled: false,
            filling: true
        })
    }

    submitInformations(evt) {
        evt.preventDefault();
        this.setState({
            filled: true,
            filling: false
        })
    }

    editInformations() {
        console.log('edit');
        this.setState({
            filled: false,
            filling: true
        })
    }

    render() {
        const {firstName, lastName, email, phone} = this.state;
        return (
            <div className="General section">
                <SectionTitle title="General Informations"/>
                {
                    this.state.filling ?
                    <form className="generalForm" onSubmit={this.submitInformations}>
                        <ul>
                            <li>
                                <label for="firstName">First Name: </label>
                                <input type="text" value={firstName} onChange={this.updateFirstName} id="firstName"></input>
                            </li>
                            <li>
                                <label for="lastName">Last Name: </label>
                                <input type="text" value={lastName} onChange={this.updateLastName} id="lastName"></input>
                            </li>
                            <li>
                                <label for="email">E-mail: </label>
                                <input type="email" value={email} onChange={this.updateEmail} id="email"></input>
                            </li>
                            <li>
                                <label for="phone">Phone: </label>
                                <input id="phone" value={phone} onChange={this.updatePhone} type="tel"></input>
                            </li>
                        </ul>
                        <Button text="Confirm"/>
                    </form>
                    : this.state.filled ?
                    <ul className="generalList">
                        <li>
                            <span className="dataLabel">First Name: </span><span>{firstName}</span>
                        </li>
                        <li>
                            <span className="dataLabel">Last Name: </span><span>{lastName}</span>
                        </li>
                        <li>
                            <span className="dataLabel">Email: </span><span>{email}</span>
                        </li>
                        <li>
                            <span className="dataLabel">Phone Number: </span><span>{phone}</span>
                        </li>
                        <Button className="smallButton" clickEvent={this.editInformations} text="Edit"/>
                    </ul>
                    :
                    <Button clickEvent={this.clickAdd} text="Add"/>
                }
            </div>
        );
    }
}

export default GeneralSection;