import * as mongoose from 'mongoose';

export const ComplainSchema = new mongoose.Schema({
    description:String,
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    },
    date: {
        type: Date,
        default:Date.now
    },
    sale:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sale'
    },
    created: {
        type:Date,
        default:Date.now
    }
});