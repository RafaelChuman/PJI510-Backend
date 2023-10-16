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
  User: User;
}

interface InterfaceGroup {
  create(zone: CreateGroup): Promise<Group>;
  delete(zone: DeleteGroup): Promise<DeleteResult>;
  update(zone: updateGroup): Promise<Group | null>;
  list(): Promise<Group[]>;
  find(id: string): Promise<Group | null>;
}

export { InterfaceGroup, CreateGroup, updateGroup, DeleteGroup };
