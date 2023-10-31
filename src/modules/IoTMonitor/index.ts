import { CreateIoTMonitor } from "./createIoTMonitor";
import { DeleteIoTMonitor } from "./deleteIoTMonitor";
import { ListIoTMonitor } from "./listOilMonitor";


const createIoTMonitor = new CreateIoTMonitor();
const deleteIoTMonitor = new DeleteIoTMonitor();
const listIoTMonitor = new ListIoTMonitor();

export { createIoTMonitor, deleteIoTMonitor, listIoTMonitor }