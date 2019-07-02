import dotenv from 'dotenv';

const data = dotenv.config();

export default {
    API: `${data.parsed.BACK_HOST}:${data.parsed.BACK_PORT}`,
    USERS: `${data.parsed.USERS_HOST}:${data.parsed.USERS_PORT}`,
    BALANCE: `${data.parsed.BALANCE_HOST}:${data.parsed.BALANCE_PORT}`,
}