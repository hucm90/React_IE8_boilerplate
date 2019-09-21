import React from 'react';

type childrenType = string | string[];

interface TitleProps {
    children: childrenType;
}

export default class Title extends React.PureComponent<TitleProps> {

    oldTitle = "";

    componentDidMount(): void {
        this.oldTitle = document.title;
        this.showDocumentTitle(this.props.children);
    }

    componentWillUnmount(): void {
        document.title = this.oldTitle;
    }

    componentWillReceiveProps(nextProps: Readonly<TitleProps>) {
        this.showDocumentTitle(nextProps.children);
    }

    showDocumentTitle(children: childrenType) {
        document.title = React.Children.toArray(children).join("");
    }

    render() {
        return "";
    }
}
