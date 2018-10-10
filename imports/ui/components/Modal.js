import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
`;

export class Modal extends React.Component {
    state = {
        opened: false,
    };

    render() {
        return ReactDOM.createPortal(
            <ModalContainer opened={this.state.opened}>
                <Viewport>{this.state.opened ? this.props.children : null}</Viewport>
            </ModalContainer>,
            document.querySelector('#react-root')
        );
    }

    open() {
        this.setState({ opened: true });
    }

    close() {
        this.setState({ opened: false });
    }
}
