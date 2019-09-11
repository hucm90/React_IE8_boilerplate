import React from 'react';
import { RouteComponentProps } from "reach__router";

@Page({ path: "/course" })
export default class PageCourse extends React.Component {

    render() {
        return (
            <div>PageCourse</div>
        );
    }
}


function Page({ path }: { path: string }) {

    return (Component: any) => {
        Component._isPage = true;
        Component.path = path;
        return Component;
    };
}

// const PageCourse2 = Page({ path: "" })(PageCourse);
