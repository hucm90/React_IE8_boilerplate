import 'promise-polyfill/src/polyfill';

import * as React from "react";
import {createRef} from "react";
import {render} from "react-dom";


function sleep(time: number){
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    })
}

async function test(){


    for(let i of [1,2,3,4]){
        await sleep(1000);
        console.log(`sleep:${i}`);
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
    return (
        <div >FuncComponent</div>
    )
}

class App extends React.Component{

    state = {
        current: 0
    }

    ref = createRef<HTMLDivElement>();

    constructor(props: {}){
        super(props);
    }

    componentDidMount(){

        setInterval(() => this.setState({current: this.state.current + 1}), 1000);

        console.log(this.ref.current)

    }

    render() {
        return (
            <div ref={this.ref}>
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
