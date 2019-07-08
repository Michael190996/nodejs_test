import url from 'url';
import net from 'net';
import config from './config';
import routes from './routes';

const server = net.createServer((socket) => {
    const events = routes(socket);

    socket.on('data', (data) => {
        const {hash: HASH, name: NAME, data: DATA} = JSON.parse(data);
        events.emit(NAME, HASH, DATA);
    });

    socket.on('error', console.error);
});

server.on('error', (err) => {
    throw err
});

const {
    port: PORT,
    hostname: HOSTNAME,
    href: HREF
} = url.parse(config.API);

server.listen(PORT, HOSTNAME, () => {
    console.log('App server start at ' + HREF);
});