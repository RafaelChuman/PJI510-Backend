import { createIoTMonitor, deleteIoTMonitor, listIoTMonitor } from "@src/modules/IoTMonitor";
import { Router, request, response } from "express";

const oilMonitorRoutes = Router();

oilMonitorRoutes.get("/", (request, response) => listIoTMonitor.execute(request, response));

oilMonitorRoutes.post("/", (request, response) => createIoTMonitor.execute(request, response));

oilMonitorRoutes.delete("/", (request, response) => deleteIoTMonitor.execute(request, response));

export { oilMonitorRoutes };

