import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from 'react-fontawesome';
import { BRAND_PRIMARY } from '../constants/colors';

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    pointer-events: ${props => (props.opened ? 'all' : 'none')};
    opacity: ${props => (props.opened ? 1 : 0)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Viewport = styled.div`
    padding: 3rem;
    border-radius: 2rem;
    background: white;
    max-width: 96rem;
    max-height: 90%;
    flex: 1;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 700px) {
        max-height: 100%;
        border-radius: 0;
    }
`;

const CloseButton = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;

    font-size: 2.5rem;
    color: ${BRAND_PRIMARY};
    cursor: pointer;
`;

export class Modal extends React.Component {
    state = {
        opened: false,
    };

    render() {
        return ReactDOM.createPortal(
            <ModalContainer opened={this.state.opened} onClick={this.close}>
                <Viewport onClick={e => e.stopPropagation()}>
                    {this.state.opened ? this.props.children : null}
                    <CloseButton onClick={this.close}>
                        <Icon name="times-circle" />
                    </CloseButton>
                </Viewport>
            </ModalContainer>,
            document.querySelector('#modal-root')
        );
    }

    open = () => {
        this.setState({ opened: true });
    };

    close = () => {
        this.setState({ opened: false });
    };
}
