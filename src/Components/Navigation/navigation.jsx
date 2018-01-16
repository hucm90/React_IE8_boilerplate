import React from "react";
import { Link } from 'react-router'
import {} from "./navigation.scss"

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className="Navigation">
                <div className="container">
                    <ul>
                        <li><Link to="/" activeClassName="current" onlyActiveOnIndex={true}>首页</Link></li>
                        <li><Link to="/demo" activeClassName="current">Demo</Link></li>
                        <li><Link to="/inbox" activeClassName="current">Inbox</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;