import {Document} from 'mongoose';

export interface Account extends Document{
    name: string;
    email: string;
    password: string;
    status: string;
    created: Date;
}