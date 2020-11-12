import { Document } from 'mongoose';

export interface TypeSale extends Document {
    description:string,
    precio:number,
    created: Date;
}