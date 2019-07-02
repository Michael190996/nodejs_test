import config from '../config';
import superagent from 'superagent';

export default class Users {
    static getById(id) {
        return superagent.get(`${config.USERS}/users/${id}`);
    }

    static save(id, name, age) {
        return superagent.post(`${config.USERS}/users/save/${id}`)
            .send({name, age});
    }

    static delete(id) {
        return superagent.post(`${config.USERS}/users/delete/${id}`);
    }
}