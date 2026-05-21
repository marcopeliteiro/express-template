import { Router } from "express";
import { ExampleController } from "../controllers/ExampleController.js";

const ExampleRouter = Router();

ExampleRouter.get("/", ExampleController.getExample);

export default ExampleRouter;
