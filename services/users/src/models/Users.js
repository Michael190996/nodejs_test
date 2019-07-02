import {Schema, model} from 'mongoose';

export default model('Users', new Schema({
    id: {type: String, index: true},
    name: String,
    age: Number
}));