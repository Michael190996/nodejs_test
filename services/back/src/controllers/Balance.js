import superagent from 'superagent';
import config from '../config';

export default class Users {
    static getById(id) {
        return superagent.get(`${config.BALANCE}/balance/${id}`)
    }

    static save(id, summary) {
        return superagent.post(`${config.BALANCE}/balance/save/${id}`)
            .send({summary})
    }

    static delete(id) {
        return superagent.post(`${config.BALANCE}/balance/delete/${id}`);
    }
}