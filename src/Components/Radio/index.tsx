import React from "react";
import InnerHtml from "../InnerHtml";
import style from "./radio.scss";

interface RadioOption{
    id: string;
    content: string;
}

interface RadioProps {
    options: RadioOption[];
    defaultValue: string;
    onChange: (val: string) => void;
    disabled: boolean;
    className: string;
}

export default class Radio extends React.PureComponent<RadioProps> {

    static defaultProps = {
        disabled: false,
        defaultValue: [],
        className: '',
        onChange: () => null,
    };

    state = {
        value: this.props.defaultValue
    };

    onInput = (value: string) => {

        let { disabled, onChange } = this.props;
        if (disabled) return;

        this.setState({ value });
        onChange(value);
    };

    render() {
        return (
            <ul className={`${style.radio} ${this.props.className}`}>
                {this.props.options.map(option => (
                    <li key={option.id} onClick={() => this.onInput(option.id)} className={`${style.option} ${this.state.value === option.id ? style.checked : ""}`}>
                        <InnerHtml>{option.content}</InnerHtml>
                    </li>
                ))}
            </ul>
        );
    }
}
