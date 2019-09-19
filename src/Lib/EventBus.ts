import _ from "underscore";

interface ListenerType {
    event: string;
    callback: (data: any) => void;
}

export default class EventBus {

    private listeners: ListenerType[] = [];

    on(event: string, callback: (data: any) => void) {
        this.listeners.push({ event, callback });
    }

    off(event: string, callback: (data: any) => void) {
        this.listeners = _.filter(this.listeners, listener => {
            return listener.event !== event || listener.callback !== callback;
        });
    }

    trigger(event: string, data: any) {
        _.chain(this.listeners)
            .filter(listener => listener.event === event)
            .each(listener => {
                const { callback } = listener;
                callback(data);
            });
    }
}
