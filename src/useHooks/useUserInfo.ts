import Store from '../Lib/Store';
import useStore from './useStore';

interface UserInfoState {
    name: string;
}

let initState = {
    name: 'menghao',
};

const userStore = new Store<UserInfoState>(initState);

export default function useUserInfo() {

    return useStore<UserInfoState>(userStore);
}
