interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
} 
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface IStudent {
  new(firstName: string, lastName: string): StudentClass;
}
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements IStudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
//example
const student: IStudent = StudentClass;
const student1: IStudentClass = new student('John', 'Doe');
console.log(student1.workOnHomework());
console.log(student1.displayName());