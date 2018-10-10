import React, { PureComponent } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import styled from 'styled-components';

import { Section } from '../../components/Section';
import { RichButton } from '../../components/RichButton';
import { page } from '../../hocs/page';

const Form = styled.div`
    width: 50%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    * {
        font-size: 1.5rem;
    }
`;

const InputWrapper = styled.div`
    width: 100%;
    padding-bottom: 1rem;
`;

const Label = styled.label`
    color: white;
    font-size: 2rem;
    padding: 1rem;
    text-align: left;
    display: block;
`;

const Input = styled.input`
    border: 0.2rem solid white;
    border-radius: 0.5rem;
    padding: 2.5rem;
    font-size: 2rem;
    background: transparent;
    outline: none;
    color: white;
    width: 100%;
`;

class Login extends PureComponent {
    state = {
        username: '',
        password: '',
        email: '',
    };

    componentDidMount() {
        const { history, userId } = this.props;

        if (userId) {
            history.push('/profile');
        }
    }

    componentWillReceiveProps(nextProps) {
        const { userId, history } = this.props;

        if (nextProps.userId && nextProps.userId !== userId) {
            history.push('/profile');
        }
    }

    handleUsernameChange = ({ target: { value } }) => {
        this.setState({ username: value });
    };

    handleEmailChange = ({ target: { value } }) => {
        this.setState({ email: value });
    };

    handlePasswordChange = ({ target: { value } }) => {
        this.setState({ password: value });
    };

    handleSubmit = event => {
        const {
            location: { isNew },
        } = this.props;

        isNew ? this.registerUser() : this.loginUser();

        event.preventDefault();
    };

    loginUser = () => {
        const { username, password, history } = this.state;

        Meteor.loginWithPassword(username, password, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    };

    registerUser = () => {
        const { history } = this.state;

        Accounts.createUser(this.state, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    };

    render() {
        const {
            location: { isNew },
        } = this.props;

        const { username, email, password } = this.state;

        return (
            <Section padding={'1rem'} background="images/landing_back_1.png">
                <Form>
                    <InputWrapper>
                        <Label>Username</Label>
                        <Input value={username} onChange={this.handleUsernameChange} />
                    </InputWrapper>
                    {isNew && (
                        <InputWrapper>
                            <Label>Email</Label>
                            <Input value={email} onChange={this.handleEmailChange} />
                        </InputWrapper>
                    )}
                    <InputWrapper>
                        <Label>Password</Label>
                        <Input value={password} onChange={this.handlePasswordChange} type="password" />
                    </InputWrapper>
                </Form>
                <RichButton small onClick={this.handleSubmit} text={isNew ? 'INSCRIBIR' : 'INICIAR'} />
            </Section>
        );
    }
}

Login.defaultProps = {};

Login.propTypes = {};

export default page(Login);
