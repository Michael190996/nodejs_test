import net from 'net';
import url from 'url';
import config from '../config';
import utils from '../utils/utils';

class Users {
    constructor(api) {
        const {
            port: PORT,
            hostname: HOSTNAME
        } = url.parse(api);

        this._client = net.connect(PORT, HOSTNAME);
        this._client.on('error', console.error);
    }

    getById(id) {
        return utils.asyncEmitSocket('users', {id}, this._client);
    }

    save(id, name, age) {
        return utils.asyncEmitSocket('save', {id, name, age}, this._client);
    }

    delete(id) {
        return utils.asyncEmitSocket('delete', {id}, this._client);
    }
}

export default new Users(config.USERS);