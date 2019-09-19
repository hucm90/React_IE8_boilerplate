import qs from 'qs';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise, AxiosInstance } from 'axios';


type RequestInstance = Pick<AxiosInstance, 'get' | 'post'>;

const defaultConfig: AxiosRequestConfig = {};

function Request(baseURL: string, otherConfig?: AxiosRequestConfig): RequestInstance {
    return axios.create({ ...defaultConfig, ...otherConfig, baseURL });
}

Request.get = <T = any>(url: string, config?: AxiosRequestConfig) => {
    return axios.get<T>(url, { ...defaultConfig, ...config });
};

Request.post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return axios.post<T>(url, qs.stringify(data), { ...defaultConfig, ...config });
};

Request.defaults = defaultConfig;


export default Request;
