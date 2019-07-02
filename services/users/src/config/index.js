import dotenv from 'dotenv';

const data = dotenv.config();
const {MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGODB_HOST, MONGODB_PORT, MONGO_INITDB_DATABASE} = data.parsed;

export default {
    API: `${data.parsed.USERS_HOST}:${data.parsed.USERS_PORT}`,
    MONGO: `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGO_INITDB_DATABASE}`
}