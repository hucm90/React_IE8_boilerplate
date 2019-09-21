import Store from '../Lib/Store';
import useStore from './useStore';

interface UserInfoState {
    isLogin: boolean;
    userName: string;
    trueName: string;
    userPhoto: string;
}

let initState: UserInfoState = {
    isLogin: false,
    userName: '',
    trueName: '',
    userPhoto: '',
};

export const userStore = new Store<UserInfoState>(initState);

export default function useUserInfo() {

    return useStore<UserInfoState>(userStore);
}
