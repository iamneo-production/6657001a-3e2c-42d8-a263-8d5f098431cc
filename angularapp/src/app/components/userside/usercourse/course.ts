export class Course {
    courseName: string;
    courseDuration: number;
    courseTiming: string;
    courseStudents: number;
    courseDescription: string;

    constructor(
        courseName: string,
    courseDuration: number,
    courseTiming: string,
    courseStudents: number,
    courseDescription: string
    ) {
        this.courseName=courseName;
        this.courseDuration=courseDuration;
        this.courseTiming=courseTiming;
        this.courseStudents=courseStudents;
        this.courseDescription=courseDescription;
    }
}
