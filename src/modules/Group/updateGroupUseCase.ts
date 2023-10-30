

import { updateGroup } from "@src/entity/Group/InterfaceGroup";
import { RepositoryGroup } from "@src/entity/Group/RepositoryGroup";
import { Response, Request, response } from "express";



class UpdateGroupUseCase {
  

  async execute(request:Request, response:Response): Promise<Response>{
    const data: updateGroup = {
      id: request.body.id,
      name:   request.body.name,
      humidity: request.body.cep,
      temperature: request.body.cellphone,
      noBreak:request.body.numberAddress,
    };

    const groupRepository = new RepositoryGroup();

    const resp = await groupRepository.update(data);

    return response.status(200).json(resp);
}
}

export { UpdateGroupUseCase };
