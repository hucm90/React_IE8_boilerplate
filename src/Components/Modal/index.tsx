import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Style from './Modal.scss';

// import ReactModal from 'react-modal';

interface ModalProps {
    centered?: boolean;
    isOpen: boolean;
    onClose?: (e: any) => void;
}

class Modal extends Component<ModalProps, {}> {

    static alert = alert;

    private el: HTMLDivElement = document.createElement("div");

    componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    render() {

        ReactDOM.render(
            <div>{this.props.children}</div>,
            this.el,
        );

        return <div>123</div>;
        // return (
        //     <ReactModal
        //         isOpen={true}
        //         className={`${Style.content} ${this.props.centered ? Style.centered : ''}`}
        //         portalClassName={Style.portal}
        //         overlayClassName={Style.overlay}
        //         bodyOpenClassName="Modal-Body--open"
        //         htmlOpenClassName="Modal-Html--open"
        //         ariaHideApp={false}>
        //         <div className={Style.close} onClick={this.props.onClose}></div>
        //         <div>
        //             {this.props.children}
        //         </div>
        //     </ReactModal>
        // );
    }
}


export function alert(childNode: React.ReactChild) {

    const onClick = () => {
        cancelAlert();
    };

    const cancelAlert = createPortal(
        <div className={Style.overlay}>
            <div className={Style.box}>
                <div className={Style.content}>{childNode}</div>
                <div className={Style.close} onClick={onClick} />
            </div>
        </div>
    );

    return cancelAlert;
}


function createPortal(childNode: React.ReactChild) {
    const el: HTMLDivElement = document.createElement("div");
    document.body.appendChild(el);

    ReactDOM.render(<div>{childNode}</div>, el);

    return () => {
        ReactDOM.unmountComponentAtNode(el);
        document.body.removeChild(el);
    };
}

export default Modal;
