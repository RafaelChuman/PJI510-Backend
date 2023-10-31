import { DeleteResult, UpdateResult } from "typeorm";
import { RescueGroup } from "./RescueGroup";
import { Group } from "../Group/Group";
import { User } from "../User/User";

interface DTOCreateRescueGroup {
  group: Group;
  users: User[];
}

interface DTODeleteRescueGroup {
  group: Group;
}

interface DTOUpdateRescueGroup {
  group: Group;
  users: User[];
}

interface InterfaceRescueGroup {
  create(data: DTOCreateRescueGroup): Promise<RescueGroup[]>;
  findByUser(idUser: string): Promise<RescueGroup[] | null>;
  deleteByGroup(data: DTODeleteRescueGroup): Promise<DeleteResult>;
  updateByGroup(data: DTOUpdateRescueGroup): Promise<RescueGroup[]>;
}

export {
  InterfaceRescueGroup,
  DTOCreateRescueGroup,
  DTODeleteRescueGroup,
  DTOUpdateRescueGroup,
};
