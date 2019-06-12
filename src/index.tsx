import * as React from "react";
import {render} from "react-dom";
// import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'

class App extends React.Component{
    render() {
        return (
            <div>
                <div className="container">123123</div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById("app")
)
