import {EventEmitter} from 'events';
import {Users} from '../models';

export default function (socket) {
    const router = new EventEmitter();

    router.on('users', async (hash, {id}) => {
        socket.write(JSON.stringify({
            hash,
            body: await Users.findOne({id})
        }));
    });

    router.on('users', async (hash, {id, name, age}) => {
        const user = new Users({id, age, name});

        await user.save();

        socket.write(JSON.stringify({hash}));
    });

    router.on('delete', async (hash, {id}) => {
        await Users.delete({id});

        socket.write(JSON.stringify({hash}));
    });

    return router;
}