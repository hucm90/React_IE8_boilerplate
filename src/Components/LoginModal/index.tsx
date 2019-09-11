import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Modal from 'Components/Modal';

interface LoginModalState {
    type: string;
    visible: boolean;
}

interface LoginModalProps {
    onClose: () => void;
    type?: string;
}


class LoginModal extends Component<LoginModalProps, LoginModalState> {

    constructor(props: LoginModalProps) {
        super(props);
        this.state = {
            visible: false,
            type: this.props.type || 'Register'
        };
    }

    componentDidMount() {
        this.setState({ visible: true });
    }

    toggleType = (type: string = 'Login') => {
        this.setState({ type: type });
    };

    render() {
        return (
            <Modal
                centered={true}
                visible={this.state.visible}
                onClose={this.props.onClose}>
            </Modal>
        );
    }
}


function open(type: string) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<LoginModal
        type={type}
        onClose={() => {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }}
    />, div);
}

export default { open };
