export interface IUser {
    firstName: string, 
    middleName?: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    emailVerified: boolean,
    role?: string,
}

export enum UserRoles {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    USER = "USER",
}