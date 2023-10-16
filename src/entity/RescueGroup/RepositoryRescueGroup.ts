import { PostgresDS } from "@src/data-source";
import {
  InterfaceRescueGroup,
  CreateRescueGroup,
  DeleteRescueGroup,
  UpdateRescueGroup,
} from "./InterfaceRescueGroup";
import { DeleteResult, UpdateResult } from "typeorm";
import { RescueGroup } from "./RescueGroup";
import { Group } from "../Group/Group";

class RepositoryRescueGroup implements InterfaceRescueGroup {
  async create(data: CreateRescueGroup): Promise<RescueGroup[]> {
    const queryBuilder = PostgresDS.createQueryBuilder(
      RescueGroup,
      "RescueGroup"
    );

    data.users.forEach((user) => {
      queryBuilder
        .insert()
        .into(RescueGroup)
        .values([{ Group: data.group, User: user }]);
    });

    return await queryBuilder.execute();
  }

  async findByGroup(idGroup: string): Promise<RescueGroup[] | null> {
    const rescueGroup = PostgresDS.manager.getRepository(RescueGroup);
    return await rescueGroup.find({
      relations: {
        Group: true,
        User: true
      },
      where: {
        Group: {
          id: idGroup,
        },
      },
    });
  }

  async deleteByGroup(data: DeleteRescueGroup): Promise<DeleteResult> {
    const collaborator = await PostgresDS.manager.delete(RescueGroup, {
      Group:{
        id: data.group.id
      },
    });

    return collaborator;
  }

  async updateByGroup(
    data: UpdateRescueGroup
  ): Promise<RescueGroup[]> {

    this.deleteByGroup({group : data.group})

    return  this.create(data);
  }
}

export { RepositoryRescueGroup };
