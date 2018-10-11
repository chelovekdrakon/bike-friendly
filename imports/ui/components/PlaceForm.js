import React from 'react';
import styled from 'styled-components';
import { WithIcon } from './WithIcon';
import { BRAND_PRIMARY } from '../constants/colors';
import { RichButton } from './RichButton';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    font-size: 1.8rem;
`;

const Row = styled.div`
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    color: ${BRAND_PRIMARY};

    label {
        margin: 1rem 0;
    }

    flex: 1;
    flex-basis: 50%;
`;

const Input = styled.input`
    padding: 2rem;
    border: 2px solid ${BRAND_PRIMARY};
    flex: 1;
    border-radius: 0.8rem;
    outline: none;
`;

const Footer = styled.div`
    padding-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 700px) {
        padding-bottom: 2rem;
    }
`;

export class PlaceForm extends React.PureComponent {
    state = {};

    render() {
        return (
            <Container>
                <Row>
                    <label>Title</label>
                    <WithIcon iconMargin="2rem" iconSize="4rem" icon="edit">
                        <Input />
                    </WithIcon>
                </Row>

                <Row>
                    <label>Website</label>
                    <WithIcon iconMargin="2rem" iconSize="4rem" icon="globe">
                        <Input />
                    </WithIcon>
                </Row>

                <Row>
                    <label>Address</label>
                    <WithIcon iconMargin="2rem" iconSize="4rem" icon="location-arrow">
                        <Input />
                    </WithIcon>
                </Row>

                <Row>
                    <label>Phone</label>
                    <WithIcon iconMargin="2rem" iconSize="4rem" icon="mobile">
                        <Input />
                    </WithIcon>
                </Row>

                <Row>
                    <label>Discounts</label>
                    <WithIcon iconMargin="2rem" iconSize="4rem" icon="credit-card-alt">
                        <Input />
                    </WithIcon>
                </Row>
                <Footer>
                    <RichButton small theme="light" text="Submit" onClick={this.props.onSubmit} />
                </Footer>
            </Container>
        );
    }
}
