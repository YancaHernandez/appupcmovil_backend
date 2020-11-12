import { Document } from 'mongoose';

export interface Client extends Document {
   documento:string;
   name: string;
   created: Date;
}