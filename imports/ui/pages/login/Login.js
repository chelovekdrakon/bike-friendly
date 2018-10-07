import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
`;

const Form = styled.div`
    width: 30%;
    border: 0.3rem solid green;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    * {
      font-size: 1.5rem; 
    }
`;

const Input = styled.input`
    border: 0.1rem solid green;
    border-radius: 0.2rem;
    margin: 0.3rem 0;
    flex: 1 0 auto;
`;

const Button = styled.button`
    border: 0.2rem solid black;
    border-radius: 0.3rem;
    margin: 1rem 0;
    padding: 0.4rem 2rem;
    font-size: 1.5rem;
    min-width: 10%;

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
        color: red;
        border-color: red;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

const Label = styled.label`
    color: black;
    min-width: 30%;
    disaplay: flex;
    flex-direction: row;
`;

class Login extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = { 
            username: '',
            password: '',
            email: ''
        };
        
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this)
    }

    componentDidMount () {
        const { history, userId } = this.props;

        userId && history.push('/');
    }
    

    handleUsernameChange({ target: { value }}) {
        this.setState({ username: value });
    }

    handleEmailChange({ target: { value }}) {
        this.setState({ email: value });
    }

    handlePasswordChange({ target: { value }}) {
        this.setState({ password: value });
    }

    handleSubmit(event) {
        const { 
            location: { isNew } 
        } = this.props;

        isNew ? this.registerUser() : this.loginUser();
        
        event.preventDefault();
    }

    loginUser() {
        const {
            username,
            password
        } = this.state;

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success login');
            }
        });
    }

    registerUser() {
        const {
            username,
            email,
            password
        } = this.state;

        Accounts.createUser(this.state, (err) => {
            if (err) {
                console.log(err);
            } else {
                Accounts.loginWithPassword(username, password, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('success login');
                    }
                });
            }
        });
    }

    render() {
        const { 
            location: { isNew } 
        } = this.props;

        const {
            username,
            email,
            password
        } = this.state;

        return (
            <Container>
                <Form>
                    <InputWrapper>
                        <Label>USERNAME : </Label>
                        <Input value={username} onChange={this.handleUsernameChange} />
                    </InputWrapper>
                    {
                        isNew && (
                            <InputWrapper>
                                <Label>EMAIL : </Label>
                                <Input value={email} onChange={this.handleEmailChange} />
                            </InputWrapper>
                        )
                    }
                    <InputWrapper>
                        <Label>PASSWORD : </Label>
                        <Input value={password} onChange={this.handlePasswordChange} type="password" />
                    </InputWrapper>
                </Form>
                <Button onClick={this.handleSubmit}> {isNew ? 'Sign-up' : 'Sign-in'} </Button>
            </Container>
        );
    }
}

Login.defaultProps = {
    
};

Login.propTypes = {
    
};

export default Login;