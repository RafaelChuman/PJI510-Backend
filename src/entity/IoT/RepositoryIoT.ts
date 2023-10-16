import {
  InterfaceIoT,
  CreateIoT,
  ListIoTByUser,
  DeleteIoT,
} from "./InterfaceIoT";
import { IoT } from "./IoT";
import { PostgresDS } from "@src/data-source";
import { DeleteResult, In } from "typeorm";

export class RepositoryIoT implements InterfaceIoT {
  
  async create(data: CreateIoT): Promise<IoT | null> {
    const newIoT = new IoT();

    if(data == null)
      return null;

    newIoT.name = data.name;
    newIoT.Group = data.group;

    return await PostgresDS.manager.save(newIoT);
  }

  async listIoTByUser(data: ListIoTByUser): Promise<IoT[] | null>{
    const ioTRep =  PostgresDS.getRepository(IoT);
    
    return await ioTRep.find({
      relations:{
        Group:{
          User: true
        }
      },
      where:{
        Group:{
          User:data.user
        }
      }
    })
  }


  async delete(data: DeleteIoT): Promise<IoT[]> {
    const ioTRep = PostgresDS.getRepository(IoT)
    
    return await ioTRep.remove(data.ioT);
  }
}
