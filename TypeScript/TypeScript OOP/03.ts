class User {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  protected age: number;

  public get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public checkEmail(receivedEmail: string): boolean {
    return this.email === receivedEmail;
  }
}

export class Admin extends User {
  constructor(firstName: string, lastName: string, email: string, age: number) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }

  private getAge(): number {
    return this.age;
  }
}

//   export class Guest implements User {
//     readonly id: string;
//     firstName: string;
//     lastName: string;
//     email: string;

//     get fullname(): string {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     checkEmail(receivedEmail: string): boolean {
//       return this.email === receivedEmail;
//     }

//     constructor(firstName: string, lastName: string, email: string) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//     }
//   }
