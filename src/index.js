//import and export
import Person from "./components/Person"
import {Apple} from "./components/Food"
import PropTypes from 'prop-types';
const React = require('react');
const ReactDOM = require('react-dom');

//let + const
const a = '世界';

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 0)
}

//class
let p1 = new Person("云小飞");
//string template
p1.say(`你好${a}`)

//class extend
let apple1 = new Apple();
p1.eat(apple1);

//arrow function, default parameters
let double = (x = 2) => x * 2;
console.log(double())

//promise await async
const sleep = (time) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('ok');
        }, time);
    })
};

const start = async () => {
    for (let i of [1, 2, 3]) {
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
    console.log("终于完成了!")
};

start();

//...
let {name} = p1;
const obj = {name}
console.log(obj)

let [a1, a2, ...a3] = [1, 2, 3, 4];
console.log(a1, a2, a3)


//ReactJS
import { Router, Route, Link } from 'react-router'
// import Router from "react-router/es/Router"

let appInjectPoint = document.createElement("div");
appInjectPoint.id = "app";
document.body.appendChild(appInjectPoint);

// let Clock = (props) => (
//     <span>{props.date}</span>
// )
//
// Clock.propTypes = {
//     date : PropTypes.bool.isRequired
// }
//
// Clock.defaultProps = {
//     date : "12312"
// }
//
// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
//         this.isToggleOn = false;
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     onClick () {
//         this.setState({
//             isToggleOn : !this.state.isToggleOn
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, {this.props.name}. </h1>
//                 <p>It's <Clock date={this.state.date.toLocaleTimeString()}/></p>
//                 <p><button onClick={this.onClick.bind(this)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button></p>
//                 <ul>
//                     {[1,2,3].map((index)=><li>{index}</li>)}
//                 </ul>
//             </div>
//         );
//     }
// }
//
//
// let App = () => (
//     <Welcome name={p1.name}/>
// )

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

window.onload = () =>{
    ReactDOM.render(
        <Router>
            <Route path="/" component={App}>
                <Route path="about" component={About} />
                <Route path="inbox" component={Inbox}>
                    <Route path="messages/:id" component={Message} />
                </Route>
            </Route>
        </Router>,
        appInjectPoint
    )
}