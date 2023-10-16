import { DeleteResult } from "typeorm";
import { IoT } from "./IoT";
import { Group } from "../Group/Group";
import { User } from "../User/User";

interface CreateIoT{
    name: string;
    group: Group;
};

interface ListIoTByUser{
    user: User;
}

interface DeleteIoT{
    ioT: IoT[];
};

interface InterfaceIoT{
    
    create(data: CreateIoT): Promise<IoT | null>;
    listIoTByUser(data: ListIoTByUser): Promise<IoT[] | null>;
    delete(data: DeleteIoT): Promise<IoT[]>;
    
};

export {InterfaceIoT, CreateIoT, ListIoTByUser, DeleteIoT};