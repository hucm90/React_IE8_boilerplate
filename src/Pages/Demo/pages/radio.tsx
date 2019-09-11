import React from 'react';
import Radio from 'Components/Radio';

export default class DemoRadio extends React.Component {

    state = { value: '' };

    options = [
        { id: "dalian", content: "大连" },
        { id: "shanghai", content: "上海" },
        { id: "huhehaote", content: "呼和浩特" },
    ];

    onChange = (value: any) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <h1>Demo CheckBox</h1>

                <div>
                    <Radio onChange={this.onChange} options={this.options} />
                    <p>{this.state.value}</p>
                </div>
            </div>
        );
    }
}
