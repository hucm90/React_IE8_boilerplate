import 'promise-polyfill/src/polyfill';

import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {render} from "react-dom";
import {useCallback} from "react";
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'


function sleep(time: number){
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    })
}

async function test(){


    for(let i of [1,2,3,4]){
        await sleep(1000);
        console.log("sleep");
    }

}

test();

function decr(obj: any) {
    console.log(obj);
}

@decr
class Person {

}


function FuncComponent() {

    let [current, setCurrent] = useState(0);

    let ref = useRef<HTMLDivElement>(null);


    useEffect(() => {

        if(ref.current)
            console.log(ref.current);

    }, [current])


    setTimeout(() => {
        setCurrent(current + 1);
    }, 1000);

    console.log("render:"+ current)

    return (
        <div ref={ref}>FuncComponent:{current} <button type={"button"} onClick={() => setCurrent( current + 1)}>Add</button></div>
    )
}


// function useTimeout() {
//
// }

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
            <div>
                <div className="container">1231211131222</div>
                <div>{this.state.current}</div>
                <FuncComponent />
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById("app")
)
