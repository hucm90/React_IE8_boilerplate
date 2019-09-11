declare const polyvObject: (element: HTMLElement) => PlayerObject;

interface PlayerObject {
    videoPlayer: (config: PolyvPlayerConfig) => PlayerInstance;
}

declare interface PlayerInstance {
    changeVid: (vid: string) => void;
    // eslint-disable-next-line camelcase
    j2s_pauseVideo: () => void;
}

declare interface PolyvPlayerConfig {
    vid: string;
    width?: string | number;
    height?: string | number;
    autoplay?: boolean;
    forceH5?: boolean;
    watchEndTime?: number;
}

declare const polyvPlayer: (config: PolyvPlayerConfig) => PlayerInstance;
