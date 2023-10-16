import { Between, DeleteResult, In } from "typeorm";
import {
  InterfaceIoTMonitor,
  CreateIoTMonitor,
  ListIoTMonitorByIoT,
  ListIoTMonitorByUser,
  DeleteIoTMonitor,
} from "./InterfaceIoTMonitor";
import { PostgresDS } from "@src/data-source";
import { IoTMonitor } from "./IoTMonitor";

class RepositoryIoTMonitor implements InterfaceIoTMonitor {
  async create(data: CreateIoTMonitor): Promise<IoTMonitor | null> {
    const ioTMonitorRep = PostgresDS.getRepository(IoTMonitor);

    const newIoTMonitor = new IoTMonitor();
    newIoTMonitor.humidity = data.humidity;
    newIoTMonitor.temperature = data.temperature;
    newIoTMonitor.noBreak = data.noBreak;
    newIoTMonitor.IoT = data.ioT;

    const resp = await PostgresDS.manager.save(newIoTMonitor);

    return resp;
  }

  async listByIoT(data: ListIoTMonitorByIoT): Promise<IoTMonitor[] | null> {
    const ioTMonitorRep = PostgresDS.getRepository(IoTMonitor);
    let whereConstrant = {};

    if (data.ioT)
      whereConstrant = {
        ...whereConstrant,
        IoT: data.ioT,
      };

    if (data.dateBegin && data.dateEnd) {
      whereConstrant = {
        ...whereConstrant,
        createdAt: Between(data.dateBegin, data.dateEnd),
      };
    }

    return await ioTMonitorRep.find({
      relations: {
        IoT: {
          Group: {
            User: true,
          },
        },
      },
      where: whereConstrant,
    });
  }

  async listByUser(data: ListIoTMonitorByUser): Promise<IoTMonitor[] | null> {
    const ioTMonitorRep = PostgresDS.getRepository(IoTMonitor);
    let whereConstrant = {};

    if (data.user)
      whereConstrant = {
        ...whereConstrant,
        IoT: {
          Group: {
            User: data.user,
          },
        },
      };

    if (data.dateBegin && data.dateEnd) {
      whereConstrant = {
        ...whereConstrant,
        createdAt: Between(data.dateBegin, data.dateEnd),
      };
    }

    return await ioTMonitorRep.find({
      relations: {
        IoT: {
          Group: {
            User: true,
          },
        },
      },
      where: whereConstrant,
    });
  }

  async delete(data: DeleteIoTMonitor): Promise<IoTMonitor[]> {
    const ioTMonitorRep = PostgresDS.getRepository(IoTMonitor);

    return  await ioTMonitorRep.remove(data.ioTMonitor);
  }
}

export { RepositoryIoTMonitor };
