import { Document } from 'mongoose';
import { User } from './user';
import { Profile } from './profile';
import { TypeSale } from './typeSale';

export interface Sale extends Document {
    dateSale:Date;
    dateExpiration:Date;
    user:User;
    typeSale:TypeSale;
    price:number;
    profiles:Profile[];
    created: Date;
}