import {Action} from './action';

class Dispatcher {
    _callbacks: Function[];

    constructor() {
        this._callbacks = [];
    }

    register(callback: Function) {
        this._callbacks.push(callback);
    }

    dispatch(action: Action) {
        for (const callback of this._callbacks) {
            callback(action);
        }
    }
}

export default new Dispatcher();