import { Document } from 'mongoose';
import { Rol } from './rol';

export interface Payload {
    name: string;
    email: string;
    iat?: number;
    roles?: Rol[];
    expiresIn?: string;
}