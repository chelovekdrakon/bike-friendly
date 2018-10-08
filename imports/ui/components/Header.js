import React, { Fragment, PureComponent } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { BRAND_PRIMARY } from '../constants/colors';

const StyledLink = styled(Link)`
    color: white;
    padding: 0 ${props => props.spacing || 1}rem;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
        color: white;
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
    background-color: ${BRAND_PRIMARY};
    align-items: center;
    justify-content: space-between;
    color: white;
`;

const LogoutButton = styled.button`
    border: none;
    color: white;
    background-color: transparent;
    font-size: 17px;
    text-transform: uppercase;
    outline: none;
    padding: 1rem;
    cursor: pointer;
`;

export class Header extends PureComponent {
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

    renderNav = user =>
        user ? (
            <div>
                <StyledLink to="/map" spacing={4}>
                    Map
                </StyledLink>
                <StyledLink to="/profile" spacing={4}>
                    Profile
                </StyledLink>
            </div>
        ) : null;

    renderAuthMenu = () => (
        <div>
            <StyledLink
                to={{
                    pathname: '/login',
                    isNew: false,
                }}
            >
                Log in
            </StyledLink>
            <StyledLink
                to={{
                    pathname: '/login',
                    isNew: true,
                }}
            >
                Sign up
            </StyledLink>
        </div>
    );

    renderUserMenu = ({ username }) => (
        <div>
            <StyledLink to="/profile">{username}</StyledLink>
            {'|'}
            <LogoutButton onClick={this.handleLogout}>Log out</LogoutButton>
        </div>
    );

    render() {
        const { isAuth, user } = this.props;

        return (
            <Container>
                <StyledLink to="/">
                    <Logo src="https://via.placeholder.com/80x80" />
                </StyledLink>

                {this.renderNav(user)}

                {!isAuth ? this.renderAuthMenu() : this.renderUserMenu(user)}
            </Container>
        );
    }
}

Header.defaultProps = {};

Header.propTypes = {};
