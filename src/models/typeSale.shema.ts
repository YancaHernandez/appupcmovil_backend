import * as mongoose from 'mongoose';

export const TypeSaleSchema = new mongoose.Schema({
    description:String,
    precio:Number,
    created: {
        type:Date,
        default:Date.now
    }
});