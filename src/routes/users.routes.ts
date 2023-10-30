import { createUserUseCase, listUserUseCase } from "@src/modules/User";
import { response, request, Router } from "express";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  createUserUseCase.execute(request, response);
});

usersRoutes.get("/", (request, response) => {
  listUserUseCase.execute(request, response);
});

export { usersRoutes };
