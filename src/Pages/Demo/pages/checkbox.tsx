import React from 'react';
import CheckBox from 'Components/CheckBox';

export default class DemoCheckBox extends React.Component {

    state = { values: [] };

    options = [
        { id: "dalian", content: "大连" },
        { id: "shanghai", content: "上海" },
        { id: "huhehaote", content: "呼和浩特" },
    ];

    onChange = (values: any) => {
        this.setState({ values });
    };

    render() {
        return (
            <div>
                <h1>Demo CheckBox</h1>

                <div>
                    <CheckBox onChange={this.onChange} options={this.options} />

                    <p>[{this.state.values.join(", ")}]</p>
                </div>

                <div>
                    <h3>disabled</h3>
                    <CheckBox onChange={this.onChange} options={this.options} disabled={true} />
                </div>
            </div>
        );
    }
}
