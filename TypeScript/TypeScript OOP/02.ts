class User {
  firstName: string;
  lastName: string;
  email: string;

  //   constructor(firstName: string, lastName: string, email: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.email = email;
  //   }

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  checkEmail(receivedEmail: string): boolean {
    return this.email === receivedEmail;
  }
}

export class Admin extends User {
  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  checkEmail(receivedEmail: string): boolean {
    return this.email === receivedEmail;
  }

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
