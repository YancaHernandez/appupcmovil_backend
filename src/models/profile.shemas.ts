import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    name:String,
    password:String,
    status:{
        type: String,
        default:'Activa'
    },
    account: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Account'
    },
    created: {
        type:Date,
        default:Date.now
    }
});