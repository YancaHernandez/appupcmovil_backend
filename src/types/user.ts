import { Document } from 'mongoose';
import { Rol } from './rol';

export interface User extends Document {
    name:string;
    email:string;
    password?:string;
    created?: Date;
    roles?: Rol[];
}