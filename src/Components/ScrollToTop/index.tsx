import React from 'react';

class ScrollToTop extends React.Component {

    componentDidMount(): void {
        window.scrollTo(0, 0);
    }

    render() {
        return this.props.children || null;
    }
}

export default ScrollToTop;
