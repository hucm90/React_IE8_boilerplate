import React from 'react';

export default class DemoModel extends React.Component {

    open = () => {

    };

    render() {
        return (
            <div>
                <h1>DemoModel</h1>

                <div>
                    <button onClick={this.open}>Open</button>
                </div>
            </div>
        );
    }
}
