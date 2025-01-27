export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export class User {
  private user: IUser;
  constructor(email: string, password: string, name?: string) {
    this.user = {
      name: name || "",
      email,
      password,
    };
  }

  getName(): string {
    return this.user.name;
  }

  setName(name: string): void {
    this.user.name = name;
  }

  getEmail(): string {
    return this.user.email;
  }

  setEmail(email: string): void {
    this.user.email = email;
  }

  getPassword(): string {
    return this.user.password;
  }

  setPassword(password: string): void {
    this.user.password = password;
  }

  toJSON(): string {
    return JSON.stringify(this.user);
  }
}
