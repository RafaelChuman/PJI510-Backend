import { DTOListIoTMonitorByUser } from "@src/entity/IoTMonitor/InterfaceIoTMonitor";
import { RepositoryIoTMonitor } from "@src/entity/IoTMonitor/RepositoryIoTMonitor";
import { Request, Response } from "express";

export class ListIoTMonitor {
  async execute(request: Request, response: Response): Promise<Response> {
    const userId = request.headers.userId;

    if (userId) {
      if (typeof userId == "string") {
        const data: DTOListIoTMonitorByUser = {
          userId: userId,
          dateBegin: request.body.dataBegin,
          dateEnd: request.body.dataEnd,
        };

        const ioTMonitorRep = new RepositoryIoTMonitor();

        const resp = await ioTMonitorRep.listByUser(data);

        return response.status(200).json(resp);
      }
    }
    return response.status(422).json("Unprocessable Entity");
  }
}
