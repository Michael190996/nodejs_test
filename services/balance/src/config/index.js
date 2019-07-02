import dotenv from 'dotenv';

const data = dotenv.config();
const {MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGODB_HOST, MONGODB_PORT, MONGO_INITDB_DATABASE} = data.parsed;

export default {
    API: `${data.parsed.BALANCE_HOST}:${data.parsed.BALANCE_PORT}`,
    MONGO: `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGO_INITDB_DATABASE}`
}