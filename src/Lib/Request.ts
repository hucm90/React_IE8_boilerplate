import qs from 'qs';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 请求错误
export type RequestError = AxiosError;

function sendPostRequest<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axios.post<T>(url, qs.stringify(data), config).then((response) => getData<T>(response));
}

function sendGetRequest<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axios.get<T>(url, config).then((response) => getData<T>(response));
}

function createInstance(instanceConfig: AxiosRequestConfig) {
    // const axiosInstance = axios.create(instanceConfig);

    return {
        post: function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
            return sendPostRequest<T>(url, data, Object.assign(instanceConfig, config));
        },

        get: function get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
            return sendGetRequest<T>(url, Object.assign(instanceConfig, config));
        }
    };
}

export function getData<T>(response: AxiosResponse<T>): T {
    return (response.data as unknown as T);
}

const Request = (baseURL: string) => {
    return createInstance({ baseURL });
};

Request.defaults = axios.defaults;
Request.get = sendGetRequest;
Request.post = sendPostRequest;

export default Request;
