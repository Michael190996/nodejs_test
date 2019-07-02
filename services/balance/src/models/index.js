import mongoose from 'mongoose';
import Balance from './Balance';
import config from '../config';

mongoose.connect(config.MONGO, {
    useNewUrlParser: true
});

export {
    Balance
}