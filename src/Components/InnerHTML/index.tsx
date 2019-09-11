import React from 'react';

export default function InnerHTML(props: {children: string; className?: string}) {
    return <div className={props.className} dangerouslySetInnerHTML={{ __html: props.children }} ></div>;
}
