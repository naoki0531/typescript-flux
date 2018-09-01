import {Action} from './action';

class Dispatcher {
    callbacks: Function[];

    register(callback: Function) {
        this.callbacks.push(callback);
    }

    dispatch(action: Action) {
        for (const callback of this.callbacks) {
            callback(action);
        }
    }
}

export default new Dispatcher();