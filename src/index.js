import {} from "../scss/GlobalCSS"
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, hashHistory  } from 'react-router'
import PageIndex from "./Pages/Index"

class App extends React.Component{
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

const About = () => (
    <h3>About</h3>
)

const Inbox = (props) => (
    <div>
        <h2>Inbox</h2>
        <ul>
            <li><Link to="/inbox/messages/message1">message1</Link></li>
            <li><Link to="/inbox/messages/message2">message2</Link></li>
            <li><Link to="/inbox/messages/message3">message3</Link></li>
        </ul>
        {props.children || "Welcome to your Inbox"}
    </div>
)

const Message = (props) => (
    <h3>Message {props.params.id}</h3>
)

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="index" component={PageIndex} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById("app")
)