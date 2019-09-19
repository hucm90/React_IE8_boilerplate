import React from 'react';
import Pagination from 'Components/Pagination';

export default class DemoPagination extends React.Component {

    state = { page: 2 };

    onChange = (page: number) => {
        this.setState({ page });
    };

    render() {
        return (
            <div>
                <h1>Demo Pagination</h1>

                <div>
                    <Pagination onChange={this.onChange} pageSize={20} total={100} current={this.state.page} />

                    <p>当前页: {this.state.page}</p>
                </div>

                <div>
                    <Pagination onChange={this.onChange} pageSize={20} total={100} current={this.state.page} disabled={true} />
                </div>
            </div>
        );
    }
}
