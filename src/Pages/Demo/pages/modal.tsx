import React from 'react';

import Modal from "../../../Components/Modal";
import Title from "Components/Title";

export default class DemoModal extends React.Component {

    open = () => {
        const cancel = Modal.alert(<Test />);
    };

    render() {
        return (
            <div>
                <Title>Demo Modal</Title>
                <h1>DemoModal</h1>

                <div>
                    <button onClick={this.open}>Open</button>
                </div>
            </div>
        );
    }
}


class Test extends React.PureComponent {

    state = {
        count: 1,
    };

    componentDidMount(): void {
        setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
    }

    render() {
        return <div>Count: {this.state.count}</div>;
    }
}
