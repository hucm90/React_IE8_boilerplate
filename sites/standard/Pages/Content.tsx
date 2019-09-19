import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { LayoutMain } from "Components/Layouts";


interface IPageContentProps extends RouteComponentProps{
    id?: string;
}

export default class PageContent extends React.Component<IPageContentProps> {

    static path = "/news/:id";

    render() {

        return (
            <LayoutMain>
                <div>PageNews: {this.props.id}</div>
            </LayoutMain>
        );
    }
}
