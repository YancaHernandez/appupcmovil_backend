import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
    document:String,
    name:String,
    created: {
        type:Date,
        default:Date.now
    }
});