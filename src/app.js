import express from "express";
import homeRoute from "./routes/index.js";
import mongoose from "mongoose";
import config from "./config/keys.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import bookRoute from "./routes/book.js";
import { getCurrentWorkingFolder } from "./utils/helpers.js";

(async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    // console.log('Connection has been established successfully.');
  } catch (error) {
    // console.error('Unable to connect to the database:', error);
  }
})();

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/books", bookRoute);

const dirname = getCurrentWorkingFolder(import.meta.url);

const swaggerDocument = YAML.load(dirname + "/swagger.yaml");
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);
