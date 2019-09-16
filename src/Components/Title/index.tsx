import React from 'react';

interface TitleProps {
    children: any;
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

    showDocumentTitle(text: any) {
        document.title = text;
    }

}
