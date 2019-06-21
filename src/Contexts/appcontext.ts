import * as React from 'react';

const ContextDefault = {
    userName: 'menghao',
    age: 18,
};

const AppContext = React.createContext(ContextDefault);


export default AppContext;