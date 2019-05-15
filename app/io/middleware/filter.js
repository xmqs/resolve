module.exports = app => {
    return function* (next) {
        this.socket.emit('res', 'packet received!');
        yield* next;
    };
};
