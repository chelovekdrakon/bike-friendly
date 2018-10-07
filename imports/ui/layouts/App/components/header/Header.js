import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: palevioletred;
    display: flex;
    text-decoration: none;
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

const Header = ({ isAuth, user }) => (
    <Container>
        <Col align="center">
            <StyledLink to="/">
                <Logo src="https://via.placeholder.com/80x80" />
            </StyledLink>  
        </Col>
        <Col />
        <Col />
        <Col justify="flex-end"> 
            {
                !isAuth ? (
                    <Fragment>
                        <StyledLink 
                            to={{
                                pathname: '/login',
                                isNew: false
                            }}
                        > 
                            Sign-in 
                        </StyledLink>  
                        / 
                        <StyledLink 
                            to={{
                                pathname: '/login',
                                isNew: true
                            }}
                        > 
                            Sign-up 
                        </StyledLink>
                    </Fragment>  
                ) : (
                    <p> { user.username } </p>
                )
            }
        </Col>
    </Container>
);

Header.defaultProps = {
    
};

Header.propTypes = {
    
};

export default Header;
