import EventBus from './EventBus';


type callbackType<T> = (data: T) => void;

export default class Store<T> {

    private initState: T;
    private evtBus = new EventBus();

    constructor(state: T) {
        this.initState = state;
    }

    setItem(newData: T) {
        this.initState = newData;
        this.evtBus.trigger("dispatch", this.initState);
    }

    getItem() {
        return this.initState;
    }

    watch(callback: callbackType<T>) {
        this.evtBus.on("dispatch", callback);
    }

    unWatch(callback: callbackType<T>) {
        this.evtBus.off("dispatch", callback);
    }
}
