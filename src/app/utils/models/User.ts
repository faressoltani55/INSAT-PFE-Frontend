export class User{
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    CIN: number;
    nationality: string;
    phoneNumber: number;
    role: Role;
    address: Address;
}

export class Address{
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}

enum Role{
    ADMIN = "ADMIN",
    USER = "USER",
    PROFESSOR = "PROFESSOR"
}
