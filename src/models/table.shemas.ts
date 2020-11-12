import { Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const TableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    capacity: {
        type: Number,
        required: [true, 'Capacity required']
    },
    status: {
        type:String,
        default:'Activo'
    }
});