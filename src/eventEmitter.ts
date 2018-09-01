class EventEmitter {

    _callbacks: Map<string, Array<Function>>;

    constructor() {
        this._callbacks = new Map();
    }

    emit(type: string) {
        if (this._callbacks.has(type)) {
            for (const callback of this._callbacks.get(type)) {
                callback();
            }
        }
    }

    on(type: string, callback: Function) {
        if (this._callbacks.has(type)) {
            this._callbacks.get(type).push(callback);
        } else {
            this._callbacks.set(type, [callback]);
        }
    }
}

export default new EventEmitter();