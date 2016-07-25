import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, FormControl, ControlLabel, Clearfix, Tab, Row, Nav, NavItem } from 'react-bootstrap';
import Formsy from 'formsy-react';

import TextInput from 'components/Input';
import validations from 'utils/validations';

export default class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isButtonEnabled: false // if user can submit form or not
		};
	}

	enableButton = () => {
		this.setState({
			isButtonEnabled: true
		});
	}

	disableButton = () => {
		this.setState({
			isButtonEnabled: false
		});
	}

	handleLogin = e => {
		console.log(e);
	}

	render = () => {

		Formsy.addValidationRule('lenMoreThan', validations.lenMoreThan);
		Formsy.addValidationRule('isRamblerEmail', validations.isRamblerEmail);
		
		return (
			<Col componentClass="div" xs={12}>
				<Tab.Container id="login-tabs" defaultActiveKey="phone"> 
					<Row>
						<Col componentClass="div" xs={4} xsOffset={4}>
							<Tab.Content>
								<Tab.Pane eventKey="login">
									<Formsy.Form onValidSubmit={this.handleLogin} onValid={this.enableButton} onInvalid={this.disableButton}>

										<FormGroup>
											<ControlLabel>Login</ControlLabel>
											<TextInput name="login" type="text" validations={{minLength: 5}} validationErrors={{minLength: 'Enter at least 5 sumbols'}} required/>
										</FormGroup>

										<FormGroup>
											<ControlLabel>Password</ControlLabel>
											<TextInput name="loginPassword" type="password" validations={{strongPassword: validations.strongPassword}} validationErrors={{strongPassword: "Enter a strong password! At least 6 symbols"}} required/>
										</FormGroup>

										<FormGroup>
											<Button type="submit" bsStyle="primary" disabled={!this.state.isButtonEnabled} block>Login</Button>
										</FormGroup>

									</Formsy.Form>
								</Tab.Pane>
								<Tab.Pane eventKey="email">
									<Formsy.Form onValidSubmit={this.handleLogin} onValid={this.enableButton} onInvalid={this.disableButton}>

										<FormGroup>
											<ControlLabel>Email</ControlLabel>
											<TextInput name="email" type="text" validations={{isGoogleEmail: validations.isGoogleEmail}} validationErrors={{isGoogleEmail: 'Only Gmail boxes are accepted'}} required/>
										</FormGroup>

										<FormGroup>
											<ControlLabel>Password</ControlLabel>
											<TextInput name="loginPassword" type="password" validations={{strongPassword: validations.strongPassword}} validationErrors={{strongPassword: "Enter a strong password! At least 6 symbols"}} required/>
										</FormGroup>

										<FormGroup>
											<Button type="submit" bsStyle="primary" disabled={!this.state.isButtonEnabled} block>Login</Button>
										</FormGroup>

									</Formsy.Form>
								</Tab.Pane>
								<Tab.Pane eventKey="phone">
									<Formsy.Form onValidSubmit={this.handleLogin} onValid={this.enableButton} onInvalid={this.disableButton}>

										<FormGroup>
											<ControlLabel>Phone</ControlLabel>
											<TextInput name="phone" type="tel" validations={{isPhoneNumber: validations.isPhoneNumber, containsPlusPrefix: validations.containsPlusPrefix}} validationErrors={{isPhoneNumber: 'You should enter a valid phone number', containsPlusPrefix: 'Enter your number without +'}} required/>
										</FormGroup>

										<FormGroup>
											<ControlLabel>Password</ControlLabel>
											<TextInput name="phonePassword" type="password" validations={{strongPassword: validations.strongPassword}} validationErrors={{strongPassword: "Your password should contain at least 1 number, 1 lowercase letter, 1 uppercase letter"}} required/>
										</FormGroup>

										<FormGroup>
											<Button type="submit" bsStyle="primary" disabled={!this.state.isButtonEnabled} block>Login</Button>
										</FormGroup>

									</Formsy.Form>
								</Tab.Pane>
							</Tab.Content>
						</Col>
						<Col componentClass="div" xs={4} xsOffset={4}>
							<Nav bsStyle="pills" justified>
								<NavItem eventKey="login">
									Login
								</NavItem>
								<NavItem eventKey="email">
									Email
								</NavItem>
								<NavItem eventKey="phone">
									Phone
								</NavItem>
							</Nav>
						</Col>
					</Row>
				</Tab.Container>
			</Col>
		)
	}
  
}