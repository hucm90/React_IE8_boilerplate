import React from 'react';

export function LazyLoad<T = any>(loader: () => Promise<T>, placeholder = <div></div>) {

    class Component extends React.Component<any> {

        Component: any = null;
        state = { load: false };

        componentDidMount() {

            loader().then((comp: T) => {
                this.Component = comp;
                this.setState({ load: true });
            });
        }

        render() {
            return (this.state.load ? <this.Component {...this.props} /> : placeholder);
        }
    }

    return Component;
}
