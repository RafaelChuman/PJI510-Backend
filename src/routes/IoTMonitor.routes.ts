import { createIoTMonitor, deleteIoTMonitor, listIoTMonitor } from "@src/modules/IoTMonitor";
import { Router, request, response } from "express";

const iotMonitorRoutes = Router();

iotMonitorRoutes.get("/", (request, response) => listIoTMonitor.execute(request, response));

iotMonitorRoutes.post("/", (request, response) => createIoTMonitor.execute(request, response));

iotMonitorRoutes.delete("/", (request, response) => deleteIoTMonitor.execute(request, response));

export { iotMonitorRoutes };

