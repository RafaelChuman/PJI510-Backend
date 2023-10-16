import { DeleteResult } from "typeorm";
import { IoT } from "../IoT/IoT";
import { User } from "../User/User";
import { IoTMonitor } from "./IoTMonitor";

interface CreateIoTMonitor {
  temperature: number;
  humidity: number;
  noBreak: boolean;
  ioT: IoT;
}

interface ListIoTMonitorByIoT {
  ioT: IoT[];
  dateBegin?: Date;
  dateEnd?: Date;
}

interface ListIoTMonitorByUser {
  user: User;
  dateBegin?: Date;
  dateEnd?: Date;
}

interface DeleteIoTMonitor {
  ioTMonitor: IoTMonitor[];
}

interface InterfaceIoTMonitor {
  create(data: CreateIoTMonitor): Promise<IoTMonitor | null>;
  listByIoT(data: ListIoTMonitorByIoT): Promise<IoTMonitor[] | null>;
  listByUser(data: ListIoTMonitorByUser): Promise<IoTMonitor[] | null>;
  delete(data: DeleteIoTMonitor): Promise<IoTMonitor[]>;
}

export {
  InterfaceIoTMonitor,
  CreateIoTMonitor,
  ListIoTMonitorByIoT,
  ListIoTMonitorByUser,
  DeleteIoTMonitor,
};
