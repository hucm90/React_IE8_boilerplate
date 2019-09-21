import React from 'react';
import PolyvVideo from 'Components/PolyvVideo';
import { RouteComponentProps } from '@reach/router';

export default function DemoVideo(props: RouteComponentProps) {

    return (
        <div>
            <h1>DemoVideo (视频播放器)</h1>

            <div>
                <PolyvVideo vid="5c0ad4c56c68c3c0ac2ca7984499ecef_5" />
            </div>
        </div>
    );
}
