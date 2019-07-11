/**
 * 生产环境配置
 */
let DEBUG = false;

let BASE_URL = {
    TK: 'TK',
    B2C: 'B2C',
    Mock: 'Mock',
};


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

}

// ------------------------------------------------------------------------ //
export {
    DEBUG,
    BASE_URL
};
