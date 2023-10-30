import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { RepositoryGroup } from "@src/entity/Group/RepositoryGroup";
import { DeleteGroup } from "@src/entity/Group/InterfaceGroup";

class DeleteGroupUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam: string[] = request.body.ids;

    if (idParam.length > 0) {
      const data: DeleteGroup = {
        ids: idParam,
      };
      
      const groupRepository = new RepositoryGroup();

      const resp = await groupRepository.delete(data);

      return response.status(200).json(resp);
    }

    return response.status(200).json("Database not modified.");;
  }
}

export { DeleteGroupUseCase };
