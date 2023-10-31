import { User } from "./User";

interface DTOCreateUser {
  name: string;
  userName: string;
  password: string;
  isAdmin: boolean;
  imgPath: string;
  email: string;
  celular: number;
  telegram: number;
}

interface DTOAuthenticateUser {
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
  create(data: DTOCreateUser): Promise<User>;
  list(): Promise<User[]>;
  findByUserName(userName: string): Promise<User | null>;
  findById(IdParm: string): Promise<User | null>;
  listAllUsersGroupedByMonth(): Promise<User[]>;
}

export { InterfaceUser, DTOCreateUser, DTOAuthenticateUser, UserToken };
