import { Document } from 'mongoose';
import { Account } from './account';

export interface Profile extends Document {
   name:string;
   password:string;
   status:string;
   account:string;
   created: Date;
}