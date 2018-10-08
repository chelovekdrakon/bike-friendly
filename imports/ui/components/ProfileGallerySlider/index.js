import React from 'react';

import styled from 'styled-components';
import { BRAND_PRIMARY } from '../../constants/colors';

const SliderContainer = styled.div`
    padding: 5.5rem 11rem;
    color: #3a8d27;
    height: 100%;

    h4 {
        flex-grow: 0;
        font-weight: bold;
        margin: 2rem 0;
        text-transform: uppercase;
    }
`;

const Viewport = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
`;

const PicsContainer = styled.div`
    flex-grow: 1;
    width: ${props => props.width}%;
    display: flex;
    align-items: stretch;
    transform: translateX(-${props => props.translateX}%);
    transition: transform 0.3s;
`;

const BulletsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px 0;
`;

const Bullet = styled.div`
    width: 10px;
    height: 10px;
    cursor: pointer;
    background-color: ${BRAND_PRIMARY};
    border-radius: 50%;
    margin-right: 3px;

    &:last-child {
        margin-right: 0;
    }
`;

export class ProfileGallerySlider extends React.PureComponent {
    state = {
        translateX: 0,
        ready: false,
    };

    componentDidMount() {
        requestAnimationFrame(() => {
            this.calculateContainerWidth();
            this.setState({ ready: true });
        });
    }

    calculateContainerWidth() {
        this.pagesCount = Math.ceil(this.props.children.length / 3);
        this.containerWidth = this.pagesCount * 100;
        this.containerWidth += this.props.children.length - 1;
    }

    slideToPage(pageIndex) {
        const progress = pageIndex / this.pagesCount;
        this.setState({ translateX: progress * 100 });
    }

    renderContent() {
        return this.state.ready ? (
            <Viewport>
                <h4>My pics</h4>
                <PicsContainer width={this.containerWidth} translateX={this.state.translateX}>
                    {React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, { margin: 1 });
                    })}
                </PicsContainer>
                <BulletsContainer>
                    {Array.from({ length: this.pagesCount }).map((_, index) => (
                        <Bullet key={index} onClick={() => this.slideToPage(index)} />
                    ))}
                </BulletsContainer>
            </Viewport>
        ) : null;
    }

    render() {
        return <SliderContainer>{this.renderContent()}</SliderContainer>;
    }
}
