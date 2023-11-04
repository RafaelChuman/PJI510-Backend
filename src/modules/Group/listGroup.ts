import { RepositoryGroup } from "@src/entity/Group/RepositoryGroup";
import { AppError } from "@src/errors/AppError";
import { Response, Request } from "express";

class ListGroup {
  async execute(request: Request, response: Response): Promise<Response> {
    const groupRespository = new RepositoryGroup();
    const userId = request.headers?.userId;
    const groupId = request.query?.groupId;

    if (groupId) {
      if (typeof groupId === "string") {
        const group = await groupRespository.find(groupId);

        return response.status(200).json(group);
      }
    }

    if (userId) {
      if (typeof userId === "string") {
        const group = await groupRespository.list(userId);

        return response.status(200).json(group);
      }
    }

    return response.status(422).json("Unprocessable Entity");
  }
}

export { ListGroup };
