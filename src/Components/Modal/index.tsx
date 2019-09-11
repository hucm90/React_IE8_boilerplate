import React, { Component } from 'react';
import Style from './model.scss';

import ReactModal from 'react-modal';

interface ModalProps {
    centered?: boolean;
    visible: boolean;
    onClose: (e: any) => void;
}

class Modal extends Component<ModalProps, {}> {

    constructor(props: ModalProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.visible}
                className={`${Style.content} ${this.props.centered ? Style.centered : ''}`}
                portalClassName={Style.portal}
                overlayClassName={Style.overlay}
                bodyOpenClassName="Modal-Body--open"
                htmlOpenClassName="Modal-Html--open"
                ariaHideApp={false}>
                <div className={Style.close} onClick={this.props.onClose}></div>
                <div>
                    {this.props.children}
                </div>
            </ReactModal>
        );
    }
}

export default Modal;
