import React from 'react';
import style from './style.scss';


export interface TextProps {
    length: number;
}

export function Text({ length }: TextProps) {
    const strs = new Array(length).fill("■");
    return <div style={{ wordWrap: "break-word" }}><span className={style.text}>{strs}</span></div>;
}


export interface LineProps {
    width?: string;
}

export function Line({ width }: LineProps) {
    return <div className={style.text} style={{ width }}>&nbsp;</div>;
}


export interface PhotoProps {
    width: number;
}

export function Photo({ width }: PhotoProps) {
    return <div className={style.photo} style={{ width, height: width }}>&nbsp;</div>;
}

export interface RectProps {
    width: number| string;
    height: number| string;
}

export function Rect({ width, height }: RectProps) {
    return <div className={style.rect} style={{ width, height }}>&nbsp;</div>;
}

export function Article() {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}><Text length={30} /></h1>
            <div><Text length={200} /></div>
            <div><Text length={400} /></div>
        </div>
    );
}
