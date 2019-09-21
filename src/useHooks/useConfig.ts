import React, { useContext } from 'react';
import { ConfigContext, AppConfigType } from '../Context/ConfigContext';

export default function useConfig() {
    return useContext(ConfigContext);
}
