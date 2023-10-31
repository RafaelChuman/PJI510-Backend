import { createUser, listUser } from "@src/modules/User";
import { response, request, Router } from "express";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  createUser.execute(request, response);
});

userRoutes.get("/", (request, response) => {
  listUser.execute(request, response);
});

export { userRoutes };
