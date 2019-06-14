import 'promise-polyfill/src/polyfill';

import * as React from "react";
import {render} from "react-dom";
import { Router, Link } from "@reach/router"

import PageHome from "./Pages/home";
import PageNews from "./Pages/news";



interface IProps {

}


interface IState {

}


class App extends React.Component<IProps, IState>{

    state = {
        current: 0
    }

    constructor(props: IProps){
        super(props);
    }


    componentDidMount(){

        // setInterval(() => this.setState({current: this.state.current + 1}), 1000);

    }

    render() {
        return (
            <Router>
                <PageHome path={"/"}/>
                <PageNews path={"news"} />
            </Router>
        )
    }
}

render(
    <App />,
    document.getElementById("app")
)
