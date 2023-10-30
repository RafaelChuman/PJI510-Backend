import { CreateGroupUseCase } from "./createGroupUseCase";
import { DeleteGroupUseCase } from "./deleteGroupUseCase";
import { ListGroupUseCase } from "./listGroupUseCase";
import { UpdateGroupUseCase } from "./updateGroupUseCase";



const listGroupUseCase = new ListGroupUseCase()
const createGroupUseCase = new CreateGroupUseCase();
const deleteGroupUseCase = new DeleteGroupUseCase();
const updateGroupUseCase = new UpdateGroupUseCase();

export{
    listGroupUseCase, 
    createGroupUseCase,
    deleteGroupUseCase,
    updateGroupUseCase,
}