export default {
    hash() {
        return Math.random().toString(32).substring(2, 15);
    },

    deffered() {
        const deffered = {
            resolve: null,
            reject: null,
            promise: null
        };

        deffered.promise = new Promise((resolve, reject) => {
            deffered.resolve = resolve;
            deffered.reject = reject;
        });

        return deffered;
    },

    asyncEmitSocket(name, data, client) {
        const deffered = this.deffered();
        const HASH = this.hash();

        client.write(JSON.stringify({
            name,
            data,
            hash: HASH
        }));

        const timer = setTimeout(() => deffered.reject(), 10000);     
        
        const listener = (data) => {
            const {hash, body} = JSON.parse(data);

            if (hash === HASH) {
                deffered.resolve(body);
                clearTimeout(timer);
            }
        };

        client.on('data', listener);
        
        deffered.promise.finally(() => client.removeListener('data', listener));


        return deffered.promise;
    }
}
