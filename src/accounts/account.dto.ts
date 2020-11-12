export class CreateAccountDto {
    email: string;
    password: string;
    status: string; //Activa,Inactiva,Anulada,En Uso
}

export class UpdateAccountDto {
    email: string;
    password: string;
    status: string; //Activa,Inactiva,Anulada,En Uso
}