import {EventEmitter} from 'events';
import {Balance} from '../models';

export default function (socket) {
    const router = new EventEmitter();

    router.on('balance', async (hash, {id}) => {
        socket.write(JSON.stringify({
            hash,
            body: {balance:5}
        }));
    });

    router.on('save', async (hash, {id, summary}) => {
        const balance = new Balance({
            id, summary
        });

        await balance.save();

        socket.write(JSON.stringify({hash}));
    });

    router.on('delete', async (hash, {id}) => {
        await Balance.delete({id});

        socket.write(JSON.stringify({hash}));
    });

    return router;
}