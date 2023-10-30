import { DeleteResult } from "typeorm";
import { Group } from "./Group";
import { User } from "../User/User";

interface CreateGroup {
  name: string;
  temperature: number;
  humidity: number;
  noBreak: boolean;
  User: User;
}

interface DeleteGroup {
  ids: string[];
}

interface updateGroup {
  id: string;
  name: string;
  temperature: number;
  humidity: number;
  noBreak: boolean;
}

interface InterfaceGroup {
  create(data: CreateGroup): Promise<Group>;
  delete(data: DeleteGroup): Promise<DeleteResult>;
  update(data: updateGroup): Promise<Group | null>;
  list(userId: string): Promise<Group[]>;
  find(groupId: string): Promise<Group | null>;
}

export { InterfaceGroup, CreateGroup, updateGroup, DeleteGroup };
