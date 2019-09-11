import React, { PureComponent } from 'react';
import Style from './Input.module.scss';

interface IInputGroupProps {
    children: any;
}

const InputGroup = (props: IInputGroupProps) => {
    return (
        <div className={Style.InputGroup}>
            {props.children}
        </div>
    );
};

interface Iprops {
    type: string;
    value: string;
    placeholder: string;
    name?: string;
    children?: any;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

interface Istate {
    top: boolean;
}

class Input extends PureComponent<Iprops, Istate> {

    static InputGroup = InputGroup;
    private inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: Iprops) {
        super(props);
        this.state = {
            top: false
        };
        this.inputRef = React.createRef();
    }
    onFocus = () => {
        this.setState({ top: true });
    };

    onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) { this.setState({ top: false }) }
    };

    focusInput = () => {
        this.inputRef.current && this.inputRef.current.focus();
    };

    render() {
        return (
            <div className={Style.InputGroupRow}>
                <label className={`${Style.Placeholder} ${this.state.top && Style.Top}`} onClick={this.focusInput}>{this.props.placeholder}</label>
                <input
                    type={this.props.type}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    name={this.props.name}
                    ref={this.inputRef}
                />
                {this.props.children}
            </div>
        );
    }
}

export default Input;
