import React from 'react';
import styled from 'styled-components';
import { CarouselArrow } from './CarouselArrow';

const Container = styled.div`
    height: 100%;
    display: flex;
`;

export class Carousel extends React.PureComponent {
    state = {
        activeIndex: 0,
    };

    componentDidMount() {
        this.startCarousel();
    }

    startCarousel() {
        this.carouselIntervalId = setInterval(this.nextSlide, 5000);
    }

    stopCarousel() {
        clearInterval(this.carouselIntervalId);
    }

    nextSlide = () => this._switchSlide(+1);
    prevSlide = () => this._switchSlide(-1);

    _switchSlide(diff) {
        this.stopCarousel();

        let newActiveIndex = this.state.activeIndex + diff;

        if (newActiveIndex >= this.props.children.length) {
            newActiveIndex = 0;
        }

        if (newActiveIndex < 0) {
            newActiveIndex = this.props.children.length + newActiveIndex;
        }

        this.setState({
            activeIndex: newActiveIndex,
        });

        this.startCarousel();
    }

    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                isActive: this.state.activeIndex === index,
            });
        });

        return (
            <Container>
                <CarouselArrow onClick={this.prevSlide} direction="backward" />
                {children}
                <CarouselArrow onClick={this.nextSlide} direction="forward" />
            </Container>
        );
    }
}
