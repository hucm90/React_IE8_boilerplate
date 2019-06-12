import 'promise-polyfill/src/polyfill';

import * as React from "react";
import {render} from "react-dom";
// import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'


function sleep(time: number){
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    })
}

async function test(){
    await sleep(1000);
    console.log("sleep");
}

test();

function decr(obj: any) {
    console.log(obj);
}

@decr
class Person {

}

class App extends React.Component{
    render() {
        return (
            <div>
                <div className="container">1231211131222</div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById("app")
)
