import { Entreprise } from './Entreprise';
import { Student } from './Student';

export class Subject{
    id: number;
    title: string;
    type: SubjectType;
    description: string;
    duration: number;
    categories: Array<string>;
    status: SubjectStatus;
    entreprise: Entreprise;
    student: Student
}


export enum SubjectType{
    PROFESSIONAL = 'PROFESSIONAL',
    RESEARCH = "RESEARCH"
}

export enum SubjectStatus{
    PENDING = 'PENDING',
    REFUSED = "REFUSED",
    ACCEPTED = "ACCEPTED"
}