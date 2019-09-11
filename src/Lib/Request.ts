import qs from 'qs';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise, AxiosInstance } from 'axios';


type RequestInstance = Pick<AxiosInstance, 'get' | 'post'>;

const defaultConfig: AxiosRequestConfig = {};

function Request(baseURL: string): RequestInstance {
    return axios.create({ ...defaultConfig, baseURL });
}

Request.get = <T = any>(url: string, config?: AxiosRequestConfig) => {
    return FromPromise(axios.get<T>(url, { ...defaultConfig, ...config }));
};

Request.post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return axios.post<T>(url, qs.stringify(data), { ...defaultConfig, ...config });
};

Request.defaults = defaultConfig;


export default Request;


function FromPromise<T>(promise: Promise<T>) {

    const errorHandlers = [];
    const successHandlers = [];

    const response = {
        addHandler: (handler: any) => errorHandlers.push(handler),
        then: (callback: any) => {}
    };

    return Promise.resolve(promise);
}
