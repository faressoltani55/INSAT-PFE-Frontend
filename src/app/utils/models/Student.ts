import { User } from './User';
export class Student extends User{
    studentNumber: number;
    major: string;
    level: string;
    diploma: string;
    group: string;
    birthDate: Date;
    birthPlace: string;
    photo: string;
    CV: string;
    active: boolean
}