import { Router } from "express";
import { ExampleController } from "../controllers/ExampleController";

const ExampleRouter = Router();

ExampleRouter.get("/", ExampleController.getExample);

export default ExampleRouter;
