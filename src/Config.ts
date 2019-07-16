/**
 * 生产环境配置
 */
let DEBUG = false;

let BASE_URL = {
    TK: 'TK',
    B2C: 'B2C',
    Mock: 'Mock',
};

// sentry配置
let SENTRY_DSN = 'http://04c1d5961cab4f9b8317a5a0e0ee1c05@st.dufe.online/2';

/**
 * 开发模式配置
 */
if (process.env.NODE_ENV === 'development') {

    DEBUG = true;

    BASE_URL = {
        TK: 'http://172.16.2.2:8080/',
        B2C: 'http://api.dufe.online/',
        Mock: 'https://www.easy-mock.com/mock/5b0b61d81a903d20902bee9b/mock/',
    };

    SENTRY_DSN = 'http://04c1d5961cab4f9b8317a5a0e0ee1c05@st.dufe.online/2';

}

/**
 * 测试环境配置
 */

else if (process.env.NODE_ENV === 'test') {

    DEBUG = false;

}

// ------------------------------------------------------------------------ //
export {
    DEBUG,
    BASE_URL,
    SENTRY_DSN,
};
