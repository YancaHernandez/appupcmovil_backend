import { Document } from 'mongoose';

export interface Rol extends Document {
    name:string;
    created: Date;
}