import mongoose from 'mongoose';
import Users from './Users';
import config from '../config';

mongoose.connect(config.MONGO, {
    useNewUrlParser: true
});

export {
    Users
}