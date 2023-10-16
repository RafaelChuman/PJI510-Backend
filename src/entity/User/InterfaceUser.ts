import { User } from "./User";

interface CreateUser {
  name: string;
  userName: string;
  password: string;
  isAdmin: boolean;
  imgPath: string;
  email: string;
  celular: number;
  telegram: number;
}

interface AuthenticateUser {
  userName: string;
  password: string;
}

interface UserToken {
  user: {
    userName: string;
  };
  token: string;
}

interface InterfaceUser {
  create(data: CreateUser): Promise<User>;
  list(): Promise<User[]>;
  findByUserName(userName: string): Promise<User | null>;
  findById(IdParm: string): Promise<User | null>;
  listAllUsersGroupedByMonth(): Promise<User[]>;
}

export { InterfaceUser, CreateUser, AuthenticateUser, UserToken };
