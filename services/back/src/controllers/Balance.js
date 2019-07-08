import net from 'net';
import url from 'url';
import config from '../config';
import utils from '../utils/utils';

class Balance {
    constructor(api) {
        const {
            port: PORT,
            hostname: HOSTNAME
        } = url.parse(api);

        this._client = net.connect(PORT, HOSTNAME);
        this._client.on('error', console.error);
    }

    getById(id) {
        return utils.asyncEmitSocket('balance', {id}, this._client);
    }

    save(id, summary) {
        return utils.asyncEmitSocket('save', {id, summary}, this._client);
    }

    delete(id) {
        return utils.asyncEmitSocket('delete', {id}, this._client);
    }
}

export default new Balance(config.BALANCE);