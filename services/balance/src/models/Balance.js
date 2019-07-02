import {Schema, model} from 'mongoose';

export default model('Balance', new Schema({
    id: {type: String, index: true},
    summary: Number
}));