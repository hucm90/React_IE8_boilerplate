import React from 'react';

interface GetScriptProps {
    src: string;
    onLoad: () => void;
    onError: (e: Error) => void;
}

export default class GetScript extends React.Component<GetScriptProps> {

    state = {
        loaded: false,
    };

    componentDidMount(): void {
        getScript(this.props.src)
            .then(this.onScriptLoaded)
            .catch(this.props.onError);
    }

    onScriptLoaded = () => {
        this.setState({ loaded: true });
        this.props.onLoad();
    };

    render() {
        return this.state.loaded && this.props.children;
    }
}


let loadedScript: string[] = [];

export function getScript(src: string) {

    if (loadedScript.includes(src)) {
        return Promise.resolve();
    }

    const script = document.createElement("script");
    // script.async = true;
    script.src = src;
    const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;

    return new Promise((resolve, reject) => {

        try {
            head.appendChild(script);
        } catch (e) {
            reject(e);
        }

        // @ts-ignore
        script.onload = script.onreadystatechange = () => {
            // @ts-ignore
            if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                resolve();
                loadedScript.push(src);
            }
        };

        script.onerror = () => {
            reject(new Error("第三放库加载失败: " + src));
        };
    });
}
