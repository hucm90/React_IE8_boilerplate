import React from 'react';
import Spinner from 'Components/Spinner';

export default class DemoSpinner extends React.Component {


    render() {

        return (
            <div>
                <h1>DemoSpinner</h1>

                <div>
                    <div className="row">
                        <div className="c1-4">
                            <h3>size=20</h3>
                            <Spinner size={20} />
                        </div>
                        <div className="c1-4">
                            <h3>size=40</h3>
                            <Spinner size={40} />
                        </div>
                        <div className="c1-4">
                            <h3>size=80</h3>
                            <Spinner size={80} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
