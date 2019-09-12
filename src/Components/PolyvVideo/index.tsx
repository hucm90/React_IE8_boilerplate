import React, { Component, createRef } from 'react';
import * as Debug from 'Lib/Debug';
import GetScript from 'Components/GetScript';
// eslint-disable-next-line no-undef


interface IPolyvVideoProps {
    vid: string;
    autoPlay?: boolean;
    width?: number|string;
    height?: number|string;
    endTime?: number;
    onPlayOver?: () => void;
}

class PolyvVideo extends Component<IPolyvVideoProps> {

    private player: (PlayerInstance | undefined);
    private ref = createRef<HTMLDivElement>();

    constructor(props: IPolyvVideoProps) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(props: IPolyvVideoProps) {
        if (!this.player) return;

        if (this.props.vid !== props.vid) {
            this.player.changeVid(props.vid);
        }
    }

    componentDidCatch() {
        Debug.error('Polyv: componentDidCatch');
    }

    onScriptLoad = () => {
        if (!this.ref.current) return;

        // eslint-disable-next-line no-undef
        this.player = polyvObject(this.ref.current).videoPlayer({
            vid: this.props.vid,
            forceH5: true,
            width: this.props.width || "100%",
            height: this.props.height || 500,
            autoplay: this.props.autoPlay || false,
            watchEndTime: this.props.endTime || 0,
        });

        Debug.log(this.player);

        this.handlePlayEvents();
    };

    onScriptLoadError = (e: Error) => {
        Debug.error("视频播放器加载失败: ", e);
    };

    handlePlayEvents() {
        // @ts-ignore
        window['s2j_onPlayOver'] = () => {
            this.props.onPlayOver && this.props.onPlayOver();
        };
    }

    componentWillUnmount(): void {
        this.player = undefined;
    }

    pauseVideo() {
        if (!this.player) return;
        this.player.j2s_pauseVideo();
    }

    render() {
        return (
            <div ref={this.ref} id="PolyvVideo">
                <GetScript src="https://player.polyv.net/script/polyvplayer.min.js"
                    onError={this.onScriptLoadError}
                    onLoad={this.onScriptLoad}
                />
            </div>
        );
    }
}

export default PolyvVideo;
