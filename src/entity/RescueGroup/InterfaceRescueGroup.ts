import { DeleteResult, UpdateResult } from "typeorm";
import { RescueGroup } from "./RescueGroup";
import { Group } from "../Group/Group";
import { User } from "../User/User";

interface CreateRescueGroup {
  group: Group;
  users: User[];
}

interface DeleteRescueGroup {
  group: Group;
}

interface UpdateRescueGroup {
  group: Group;
  users: User[];
}

interface InterfaceRescueGroup {
  create(data: CreateRescueGroup): Promise<RescueGroup[]>;
  findByGroup(idGroup: string): Promise<RescueGroup[] | null>;
  deleteByGroup(data: DeleteRescueGroup): Promise<DeleteResult>;
  updateByGroup(data: UpdateRescueGroup): Promise<RescueGroup[]>;
}

export {
  InterfaceRescueGroup,
  CreateRescueGroup,
  DeleteRescueGroup,
  UpdateRescueGroup,
};
