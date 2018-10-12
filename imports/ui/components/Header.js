import React, { Fragment, PureComponent } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { BRAND_PRIMARY } from '../constants/colors';
import { Logo } from './Logo';

const StyledLink = styled(Link)`
    color: white;
    padding: 0 ${props => props.spacing || 1}rem;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
        color: white;
    }

    @media (max-width: 700px) {
        padding: 1rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    background-color: ${BRAND_PRIMARY};
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 1.8rem;

    @media (max-width: 700px) {
        .user-menu > a,
        .user-menu > span {
            display: none;
        }
    }
`;

const LogoutButton = styled.button`
    border: none;
    color: white;
    background-color: transparent;
    font-size: 1.8rem;
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
                    Mapa
                </StyledLink>
                <StyledLink to="/profile" spacing={4}>
                    Perfil
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
                INICIAR
            </StyledLink>
            <StyledLink
                to={{
                    pathname: '/login',
                    isNew: true,
                }}
            >
                INSCRIBIR
            </StyledLink>
        </div>
    );

    renderUserMenu = ({ username }) => (
        <div className="user-menu">
            <StyledLink to="/profile">{username}</StyledLink>
            <span>{'|'}</span>
            <LogoutButton onClick={this.handleLogout}>CERRAR</LogoutButton>
        </div>
    );

    render() {
        const { isAuth, user } = this.props;

        return (
            <Container>
                <Logo />

                {this.renderNav(user)}

                {!isAuth ? this.renderAuthMenu() : this.renderUserMenu(user)}
            </Container>
        );
    }
}

Header.defaultProps = {};

Header.propTypes = {};
