import { RepositoryRescueGroup } from "@src/entity/RescueGroup/RepositoryRescueGroup";
import { Response, Request } from "express";

class ListRescueGroup {
  async execute(request: Request, response: Response): Promise<Response> {
    const userId = request.headers.userId;

    if (userId) {
      if (typeof userId === "string") {
        const rescueGroupRep = new RepositoryRescueGroup();

        const resp = await rescueGroupRep.findByUser(userId);

        return response.status(202).json(resp);
      }
    }

    return response.status(422).json("Unprocessable Entity");
  }
}

export { ListRescueGroup };
