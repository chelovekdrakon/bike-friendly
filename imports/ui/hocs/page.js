import React from 'react';

export function page(Component) {
    return class PageScroller extends React.PureComponent {
        componentDidMount() {
            window.scrollTo({ top: 0 });
        }

        render() {
            return <Component {...this.props} />;
        }
    };
}
