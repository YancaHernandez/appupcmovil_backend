import { Prop } from '@nestjs/mongoose';
export class CreateTableDto {
    @Prop({ 
        type: String,
        required: 'Name is required' 
    })
    name: string;

    @Prop({ 
        type: String,
        required: 'Capacity is required' 
    })
    capacity: number;
    status: string; //Activa,Inactiva,Anulada,En Uso
}

export class UpdateTableDto {
    name: string;
    capacity: number;
    status: string; //Activa,Inactiva,Anulada,En Uso
}