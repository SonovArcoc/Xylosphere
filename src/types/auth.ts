export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface IUserWithoutPassword {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  username: string;
  confirmPassword: string;
}