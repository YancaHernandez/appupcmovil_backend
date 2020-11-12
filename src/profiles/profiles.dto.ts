export class CreateProfileDto {
    name: string;
    account: string;
    password: string;
    status?: string; //Activa,Inactiva,Anulada,En Uso
}

export class UpdateProfileDto {
    name: string;
    account: string;
    password: string;
    status?: string; //Activa,Inactiva,Anulada,En Uso
}