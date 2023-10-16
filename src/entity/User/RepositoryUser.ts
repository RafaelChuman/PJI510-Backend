import { PostgresDS } from "@src/data-source";
import { CreateUser, InterfaceUser } from "./InterfaceUser";
import { User } from "./User";

class RepositoryUser implements InterfaceUser {
  async create(data: CreateUser): Promise<User> {
    const user = new User();

    user.name = data.name;
    user.userName = data.userName;
    user.password = data.password;
    user.isAdmin = data.isAdmin;
    user.imgPath = data.imgPath;
    user.email = data.email;
    user.celular = data.celular;
    user.telegram = data.telegram;

    await PostgresDS.manager.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await PostgresDS.manager.find(User);

    return users;
  }

  async listAllUsersGroupedByMonth(): Promise<User[]> {
    const query = PostgresDS.manager.createQueryBuilder(User, "Users")
    .select(`count(id), DATE_TRUNC('month', "createdAt")`)
    .where(`date_part('year', "createdAt") = date_part('year', CURRENT_DATE)`)
    .groupBy(`DATE_TRUNC('month', "createdAt")`)

    const users = await query.execute();

    return users;
  }

  async findByUserName(userNameParm: string): Promise<User | null> {
    const user = await PostgresDS.manager.findOneBy(User, {
      userName: userNameParm,
    });

    return user;
  }

  async findById(IdParm: string): Promise<User | null> {
    const user = await PostgresDS.manager.findOneBy(User, {
      id: IdParm,
    });

    return user;
  }
}

export { RepositoryUser };
