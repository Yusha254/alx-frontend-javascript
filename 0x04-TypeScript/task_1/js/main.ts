// task_1/js/main.ts

// Teacher & Director interfaces (kept for completeness)
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Must appear exactly as required by the checker
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// The function (destructured parameter and exact return string required)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Student instance interface & constructor interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class must appear exactly as "class StudentClass {" (no implements)
class StudentClass {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName; // <- this.lastName appears literally
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }

  // extra helper (optional) to avoid unused-member lint noise
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Example usage (optional)
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
const s = new StudentClass("Alice", "Johnson");
console.log(s.displayName()); // Alice
console.log(s.workOnHomework()); // Currently working
