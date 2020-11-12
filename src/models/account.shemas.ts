import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: {
        type:String,
        default:'Activo'
    }
});