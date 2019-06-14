import * as React from "react";
import {Link, RouteComponentProps} from '@reach/router';


export default class PageHome extends React.Component<RouteComponentProps> {

    render(){
        return (
            <div>
                <h1>PageHome</h1>

                <Link to="news">Read News</Link>
            </div>
        )
    }
}
