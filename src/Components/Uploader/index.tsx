// http://fex.baidu.com/webuploader/doc/index.html#WebUploader_Uploader_options
import React, { createRef } from 'react';
import { getScript } from "Components/GetScript";
import swfUrl from './WebUploader/Uploader.swf';
import Debug from '../../Lib/Debug';
import './WebUploader/webuploader.css';

interface UploaderProps {
    accept?: string; // 指定接受哪些类型的文件
    multiple?: boolean; // 同时选择多个文件
    extensions?: string; // 允许的文件后缀，不带点，多个用逗号分割
    onUploadSuccess?: () => void; // 当文件上传成功时触发。
    onUploadError?: () => void; // 当文件上传出错时触发。
    onUploadComplete?: () => void; // 不管成功或者失败，文件上传完成时触发。
}

export default class Uploader extends React.PureComponent<UploaderProps> {

    state = {
        loaded: false,
    };

    ref = createRef<HTMLDivElement>();

    componentDidMount() {
        // @ts-ignore
        require.ensure([], () => {})
            .then(() => getScript('http://cache.edufe.cn/jquery/1.12.4/jquery.min.js'))
            .then(() => {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                try {
                    const WebUploader = require('./WebUploader/webuploader.nolog').default;

                    // this.createUploader(WebUploader);
                } catch (e) {
                    console.error(e);
                }


            }).catch((e: Error) => {
                // eslint-disable-next-line no-console
                Debug.error(e);
            });

    }

    createUploader(WebUploader: any) {

        const uploader = WebUploader.create({
            swf: swfUrl,
            pick: this.ref.current
            // 其他配置项
        });
    }

    render() {
        return (
            <div ref={this.ref}>Uploader</div>
        );
    }
}
