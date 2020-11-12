import * as mongoose from 'mongoose';

export const SaleSchema = new mongoose.Schema({
    dateSale: {
        type:Date,
        default:Date.now
    },
    dateExpiration:Date,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    typeSale: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'TypeSale'
    },
    price: Number,
    profiles: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'TypeSale'   
        }
    ],
    created: {
        type:Date,
        default:Date.now
    }
});