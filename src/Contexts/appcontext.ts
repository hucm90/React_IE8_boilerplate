import * as React from 'react';

const ContextDefault = {
    userName: 'menghao',
    age: 18,
    setUserInfo: (userInfo: any) => {}
};

const AppContext = React.createContext(ContextDefault);


export default AppContext;
