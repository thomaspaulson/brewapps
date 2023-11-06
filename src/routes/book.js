import { Router } from "express";
import { list, get, create, update, destroy } from "../controllers/book.js";

const bookRoute = Router();

bookRoute.get("/", list);
bookRoute.get("/:id", get);
bookRoute.post("/", create);
bookRoute.put("/:id", update);
bookRoute.delete("/:id", destroy);

export default bookRoute;
