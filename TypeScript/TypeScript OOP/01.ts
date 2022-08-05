class User1 {    
    firstName: string;
    lastName: string;
    email: string;

    get fullname():string {
        return `${this.firstName} ${this.lastName}`
    }

    checkEmail(receivedEmail: string):boolean {
        return this.email === receivedEmail
    }
}   