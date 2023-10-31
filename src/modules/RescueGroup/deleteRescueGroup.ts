import { DTODeleteRescueGroup } from "@src/entity/RescueGroup/InterfaceRescueGroup";
import { RepositoryRescueGroup } from "@src/entity/RescueGroup/RepositoryRescueGroup";
import { Response, Request } from "express";

class DeleteRescueGroup {
  async execute(request: Request, response: Response): Promise<Response> {
    const data: DTODeleteRescueGroup = {
      group: request.body.group,
    };

    if (data.group) {
      if (typeof data.group === "string") {
        const rescueGroupRep = new RepositoryRescueGroup();

        const resp = await rescueGroupRep.deleteByGroup(data);

        return response.status(200).json(resp);
      }
    }
    return response.status(200).json("Database not modified.");
  }
}

export { DeleteRescueGroup };
