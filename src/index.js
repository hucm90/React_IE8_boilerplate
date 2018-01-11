//import and export
import Person from "./components/Person"
import {Apple} from "./components/Food"
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
let appInjectPoint = document.createElement("div");
appInjectPoint.id = "app";
document.body.appendChild(appInjectPoint);

let Clock = (props) => (
    <span>{props.date}</span>
)

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h1>Hello, {this.props.name}. It's <Clock date={this.state.date.toLocaleTimeString()}/></h1>
        );
    }
}


let App = () => (
    <Welcome name={p1.name}/>
)

ReactDOM.render(
    <App />,
    appInjectPoint
)