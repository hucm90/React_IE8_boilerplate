import Debug from './Debug';

type RequestError = any;
// 未登陆或已退出
export function HttpAuthError(error: RequestError) {
    if (error.response && error.response.status === 400) {
        Debug.log(error.message);
    } else {
        throw error;
    }
}

// 网络异常
export function HttpNetworkError(error: RequestError) {
    if (error.response === undefined) {
        Debug.log(error.message);
    } else if (error.response && error.response.status > 403) {
        Debug.log(error.message);
    } else {
        throw error;
    }
}

// 一般请求错误
export function HttpError(error: RequestError) {
    handleError(error, HttpAuthError, HttpNetworkError);
}

function handleError(error: any, ...handlers: any) {

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < handlers.length; i++) {
        try {
            handlers[i](error);
            break;
        } catch (e) {
            if (i === handlers.length - 1) throw error;
        }
    }
}
