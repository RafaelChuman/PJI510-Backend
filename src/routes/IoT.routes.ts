import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createIoT, deleteIoT, listIoT } from "@src/modules/IoT";
import { request, Request, Response, Router } from "express";


const ioTRoutes = Router();

ioTRoutes.post("/", ensureIsAdmin, (request, response) => 
    createIoT.execute(request, response)
);

ioTRoutes.delete("/", (request, response) => 
    deleteIoT.execute(request, response)
);

ioTRoutes.get("/", (request, response) => 
    listIoT.execute(request, response)
);

export {ioTRoutes};