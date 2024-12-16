import { IUser, ILoginData, IRegisterData, IUserWithoutPassword } from '../types/auth';

export class AuthService {
  private static USERS_KEY = 'users';

  static getUsers(): IUser[] {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  static register(data: IRegisterData): IUserWithoutPassword {
    const users = this.getUsers();
    
    if (users.some(user => user.email === data.email)) {
      throw new Error('Пользователь с таким email уже существует');
    }

    if (data.password !== data.confirmPassword) {
      throw new Error('Пароли не совпадают');
    }

    const newUser: IUser = {
      id: crypto.randomUUID(),
      username: data.username,
      email: data.email,
      password: data.password, // В реальном приложении пароль нужно хешировать
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  static login(data: ILoginData): IUserWithoutPassword {
    const users = this.getUsers();
    const user = users.find(
      user => user.email === data.email && user.password === data.password
    );

    if (!user) {
      throw new Error('Неверный email или пароль');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
