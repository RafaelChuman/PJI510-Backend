import { IDeleteOilMonitorDTO } from "@src/entity/IoTMonitor/IOilMonitorRepository";
import { OilMonitorRepository } from "@src/entity/IoTMonitor/oiMonitorRepository";
import { Request, Response } from "express";

export class DeleteOilMonitor {
    async execute(req: Request, resp: Response) {

        const data: IDeleteOilMonitorDTO = req.body;

        const oilMonitorRepository = new OilMonitorRepository();

        const response = oilMonitorRepository.deleteOilMonitor(data);

        return resp.status(200).json(response);
    }
}