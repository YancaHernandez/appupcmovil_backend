import * as mongoose from 'mongoose';

export const ProfileSaleSchema = new mongoose.Schema({
    sale:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sale'
    },
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profile'
    }
});