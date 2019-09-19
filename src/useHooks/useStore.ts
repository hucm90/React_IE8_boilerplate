import { useEffect, useState } from 'react';
import Store from '../Lib/Store';


export default function useStore<T>(userStore: Store<T>): [T, (data: T) => void] {

    let [userInfo, setUserInfo] = useState<T>(userStore.getItem());

    const onDispatch = (userInfo: T) => {
        setUserInfo(userInfo);
    };

    useEffect(() => {
        userStore.watch(onDispatch);
        return () => userStore.unWatch(onDispatch);
    }, []);

    const dispatch = (userInfo: T) => {
        userStore.setItem(userInfo);
    };

    return [userInfo, dispatch];
}
