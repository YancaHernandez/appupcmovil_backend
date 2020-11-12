import { Document } from 'mongoose';
import { Client } from './client';
import { Sale } from './sale';

export interface Complain extends Document {
    description:string;
    cliente:Client;
    date: Date;
    sale: Sale;
    created: Date;
}