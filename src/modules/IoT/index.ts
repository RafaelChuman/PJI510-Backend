import { CreateIoT } from "./createIoT";
import { DeleteIoT } from "./deleteIoT";
import { ListIoT } from "./listIoT";


const createIoT = new CreateIoT();
const listIoT = new ListIoT();
const deleteIoT = new DeleteIoT();

export { createIoT, listIoT, deleteIoT };
