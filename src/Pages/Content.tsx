import * as React from 'react';
import { RouteComponentProps } from '@reach/router';


interface IPageContentProps extends RouteComponentProps{
    id?: string;
}

export default class PageContent extends React.Component<IPageContentProps> {

    render() {

        return (
            <div>PageNews: {this.props.id}</div>
        );
    }
}
