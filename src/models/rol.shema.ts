import * as mongoose from 'mongoose';

export const RolSchema = new mongoose.Schema({
    name:String,
    created: {
        type:Date,
        default:Date.now
    }
});