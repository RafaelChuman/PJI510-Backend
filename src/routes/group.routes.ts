import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createGroupUseCase, deleteGroupUseCase, listGroupUseCase, updateGroupUseCase } from "@src/modules/Group";
import { response, request, Router } from "express";

const groupRoutes = Router();

groupRoutes.post("/", (request, response) => {
  createGroupUseCase.execute(request, response);
});

groupRoutes.get("/", (request, response) => {
  listGroupUseCase.execute(request, response);
});

groupRoutes.delete("/", (request, response) => {
  deleteGroupUseCase.execute(request, response);
});

groupRoutes.put("/", (request, response) => {
  updateGroupUseCase.execute(request, response);
});



export { groupRoutes };
