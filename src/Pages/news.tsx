import * as React from "react";
import { Link, RouteComponentProps, navigate } from '@reach/router';


export default class PageNews extends React.Component<RouteComponentProps> {

    onItemClick(url: string) {
        console.log(url)
        navigate(url);
    }

    render(){

        return (
            <div>
                <h1>PageNews</h1>
                <ul>
                    <li onClick={() => this.onItemClick("/news/1")}>News1</li>
                    <li><Link to="/news/2">News2</Link></li>
                    <li><Link to="/news/3">News3</Link></li>
                </ul>
            </div>
        )
    }
}
