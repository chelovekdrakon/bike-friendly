import React, { Fragment, PureComponent } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: palevioletred;
    display: flex;
    text-decoration: ${props => props.underline || 'none'};
    color: green;
    margin: 0 0.5rem;

    &:hover {
        text-decoration: none;
    }

    &.active {
        color: green;
    }
`;

const Logo = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;
`;

const Col = styled.div`
    display: flex;
    width: 25%;
    align-items: ${props => props.align || 'flex-start'};
    justify-content: ${props => props.justify || 'flex-start'};
`;

const UserMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    border: 0.1rem solid black;
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

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        Meteor.logout(err => {
            if (err) {
                console.log(err);
            } else {
                console.log('success logout');
            }
        });
    }

    render() {
        const { isAuth, user } = this.props;

        return (
            <Container>
                <Col align="center">
                    <StyledLink to="/">
                        <Logo src="https://via.placeholder.com/80x80" />
                    </StyledLink>
                </Col>
                <Col align="flex-end">
                    {user && (
                        <StyledLink underline="underline" to="/map">
                            {' '}
                            Map{' '}
                        </StyledLink>
                    )}
                </Col>
                <Col />
                <Col />
                <Col justify="flex-end">
                    {!isAuth ? (
                        <Fragment>
                            <StyledLink
                                to={{
                                    pathname: '/login',
                                    isNew: false,
                                }}
                            >
                                Sign-in
                            </StyledLink>
                            /
                            <StyledLink
                                to={{
                                    pathname: '/login',
                                    isNew: true,
                                }}
                            >
                                Sign-up
                            </StyledLink>
                        </Fragment>
                    ) : (
                        <UserMenu>
                            <StyledLink to="/profile"> {user.username.toUpperCase()} </StyledLink>
                            <Button onClick={this.handleLogout}> Logout </Button>
                        </UserMenu>
                    )}
                </Col>
            </Container>
        );
    }
}

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
