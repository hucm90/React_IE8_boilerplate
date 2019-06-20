import * as React from "react";
import {Link, RouteComponentProps} from '@reach/router';
import AppContext from "../Contexts/appcontext";


export default class PageHome extends React.Component<RouteComponentProps>{

    static contextType = AppContext;

    render(){

        return (
            <div>
                <h1>PageHome</h1>
                <h2>hello {this.context.userName}</h2>

                <Link to="news">Read News List</Link>
            </div>
        );
    }
}
