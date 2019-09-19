import React, { Component, createRef } from 'react';
import Debug from 'Lib/Debug';
import GetScript from '../GetScript';
import Spinner from '../Spinner';
import style from './video.scss';


interface IPolyvVideoProps {
    vid: string;
    autoPlay?: boolean;
    width?: number|string;
    height?: number|string;
    endTime?: number;
    onPlayOver?: () => void;
}

class PolyvVideo extends Component<IPolyvVideoProps> {

    player: (PlayerInstance | undefined);
    ref = createRef<HTMLDivElement>();

    state = {
        ready: false
    };

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

        // @ts-ignore
        window['s2j_onReadyPlay'] = () => {
            this.setState({ ready: true });
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
            <div className={`${style.video}`}>
                <div ref={this.ref} id="PolyvVideo">
                    <GetScript src="https://player.polyv.net/script/polyvplayer.min.js"
                        onError={this.onScriptLoadError}
                        onLoad={this.onScriptLoad}
                    />
                    {!this.state.ready && <Spinner size={40} />}
                </div>
            </div>
        );
    }
}

export default PolyvVideo;
