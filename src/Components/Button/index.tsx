import React from 'react';

import Style from './Button.module.scss';

interface Props {
    children: React.ReactChild;
    className?: string;
    type?: string;
    noRadius?: boolean;
    // size?: string
    // block?: boolean
    onClick?: () => void;
}

export default (props: Props) => {
    let className = `
    ${props.className || Style.Button}
    ${props.type ? Style[props.type] : Style.primary}
    ${props.noRadius ? Style.noRadius : ''}
  `;

    return (
        <button
            className={className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
