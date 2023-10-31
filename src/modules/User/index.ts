import { CreateUser } from "./CreateUser";
import { ListUser } from "./ListUser";
import { AuthenticaUser } from "./authenticateUser";



const listUser = new ListUser()
const authenticaUser = new AuthenticaUser();
const createUser = new CreateUser();

export{
    listUser, 
    authenticaUser,
    createUser,
}