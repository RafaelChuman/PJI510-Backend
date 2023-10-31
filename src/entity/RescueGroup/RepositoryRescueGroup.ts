import { PostgresDS } from "@src/data-source";
import {
  InterfaceRescueGroup,
  DTOCreateRescueGroup,
  DTODeleteRescueGroup,
  DTOUpdateRescueGroup,
} from "./InterfaceRescueGroup";
import { DeleteResult, UpdateResult } from "typeorm";
import { RescueGroup } from "./RescueGroup";
import { Group } from "../Group/Group";

class RepositoryRescueGroup implements InterfaceRescueGroup {
  async create(data: DTOCreateRescueGroup): Promise<RescueGroup[]> {
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

  async findByUser(idUser: string): Promise<RescueGroup[] | null> {
    const rescueGroup = PostgresDS.manager.getRepository(RescueGroup);
    return await rescueGroup.find({
      relations: {
        Group: true,
        User: true,
      },
      where: {
        User: {
          id: idUser,
        },
      },
    });
  }

  async deleteByGroup(data: DTODeleteRescueGroup): Promise<DeleteResult> {
    const collaborator = await PostgresDS.manager.delete(RescueGroup, {
      Group: {
        id: data.group.id,
      },
    });

    return collaborator;
  }

  async updateByGroup(data: DTOUpdateRescueGroup): Promise<RescueGroup[]> {
    this.deleteByGroup({ group: data.group });

    return this.create(data);
  }
}

export { RepositoryRescueGroup };
