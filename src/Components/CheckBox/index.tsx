import React from "react";
import InnerHtml from "../InnerHtml";
import style from "./checkbox.scss";

interface CheckOption{
    id: string;
    content: string;
}

interface CheckBoxProps {
    options: CheckOption[];
    onChange: (answer: string[]) => void;
    disabled?: boolean;
    className?: string;
    defaultValue: string[];
}

export default class CheckBox extends React.PureComponent<CheckBoxProps> {

    static defaultProps = {
        disabled: false,
        defaultValue: [],
        className: '',
        onChange: () => null,
    };

    state = {
        value: this.props.defaultValue
    };

    onInput = (optionId: string) => {
        let { disabled, onChange } = this.props;
        let { value } = this.state;
        if (disabled) return;

        let newValue: string[] = [];

        if (value.includes(optionId)) {
            newValue = value.filter(val => val !== optionId);
        } else {
            newValue = [...value, optionId];
        }

        this.setState({ value: newValue });
        onChange(newValue);
    };

    render() {

        return (
            <ul className={`${this.props.className} ${style.checkbox}`}>
                {this.props.options.map(option => (
                    <li key={option.id} onClick={() => this.onInput(option.id)} className={`${style.option} ${this.state.value.includes(option.id) ? style.checked : ''}`}>
                        <InnerHtml>{option.content}</InnerHtml>
                    </li>
                ))}
            </ul>
        );
    }
}
