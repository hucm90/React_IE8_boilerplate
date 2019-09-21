import React from 'react';


export interface AppConfigType {
    logo: string;
    name: string;
    code: string;
    Tip?: React.ComponentType;
}

const Config: AppConfigType = {
    logo: "",
    name: "",
    code: "",
};

export const ConfigContext = React.createContext(Config);
