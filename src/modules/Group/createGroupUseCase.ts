import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { CreateGroup } from "@src/entity/Group/InterfaceGroup";
import { RepositoryGroup } from "@src/entity/Group/RepositoryGroup";

class CreateGroupUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const data: CreateGroup = {
      name: request.body.name,

      temperature: request.body.temperature,
      humidity: request.body.humidity,
      noBreak: request.body.noBreak,

      User: request.body.User,
    };
    const groupRepository = new RepositoryGroup();

    const groupNameAlredyExist = await groupRepository.find(data.name);

    if (groupNameAlredyExist) {
      return response.status(200).json("Group Already Exists.");
    }

    const resp = await groupRepository.create(data);

    return response.status(200).json(resp);
  }
}

export { CreateGroupUseCase };
