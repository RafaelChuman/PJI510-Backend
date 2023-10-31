import { PostgresDS } from "@src/data-source";
import { DeleteResult, In } from "typeorm";
import { Group } from "./Group";
import {
  InterfaceGroup,
  DTOCreateGroup,
  DTODeleteGroup,
  DTOUpdateGroup,
} from "./InterfaceGroup";
import internal from "stream";

class RepositoryGroup implements InterfaceGroup {
  async list(userId: string): Promise<Group[]> {
    const groupRep = PostgresDS.manager.getRepository(Group);

    return await groupRep.find({
      relations: {
        RescueGroup: true,
        User: true
      },
      where: {
        User: {
          id: userId,
        },
      },
    });
  }

  async find(groupId: string): Promise<Group | null> {
    const groups = await PostgresDS.manager.findOneBy(Group, {
      id: groupId,
    });

    return groups;
  }

  async create(group: DTOCreateGroup): Promise<Group> {
    const newGroup = new Group();

    newGroup.name = group.name;
    newGroup.temperature = group.temperature;
    newGroup.humidity = group.humidity;
    newGroup.noBreak = group.noBreak;
    newGroup.User = group.User;

    await PostgresDS.manager.save(newGroup);

    return newGroup;
  }

  async delete(group: DTODeleteGroup): Promise<DeleteResult> {
    return await PostgresDS.manager.delete(Group, {
      id: In(group.ids),
    });
  }

  async update(group: DTOUpdateGroup): Promise<Group | null> {
    const updtGroup = await PostgresDS.manager.findOneBy(Group, {
      id: group.id,
    });

    if (!updtGroup) return null;

    updtGroup.name = group.name;
    updtGroup.temperature = group.temperature;
    updtGroup.humidity = group.humidity;
    updtGroup.noBreak = group.noBreak;

    await PostgresDS.manager.save(Group, updtGroup);

    return updtGroup;
  }
}

export { RepositoryGroup };
