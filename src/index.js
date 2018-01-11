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
// import {
//     Router as Router,
//     Route,
//     Link
// } from 'react-router'

let appInjectPoint = document.createElement("div");
appInjectPoint.id = "app";
document.body.appendChild(appInjectPoint);

let Clock = (props) => (
    <span>{props.date}</span>
)

Clock.propTypes = {
    date : PropTypes.bool.isRequired
}

Clock.defaultProps = {
    date : "12312"
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.isToggleOn = false;
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

    onClick () {
        this.setState({
            isToggleOn : !this.state.isToggleOn
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}. </h1>
                <p>It's <Clock date={this.state.date.toLocaleTimeString()}/></p>
                <p><button onClick={this.onClick.bind(this)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button></p>
            </div>
        );
    }
}


let App = () => (
    <Welcome name={p1.name}/>
)


// const BasicExample = () => (
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/topics">Topics</Link></li>
//             </ul>
//
//             <hr/>
//
//             <Route exact path="/" component={Home}/>
//             <Route path="/about" component={About}/>
//             <Route path="/topics" component={Topics}/>
//         </div>
//     </Router>
// )
//
// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )
//
// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// )
//
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//                 </Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )}/>
//     </div>
// )
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )

ReactDOM.render(
    <App />,
    appInjectPoint
)