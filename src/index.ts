import express from "express";
import routes from "./routes/index.js";
import cors from "cors"
import * as dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(cors())

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});

routes(app);
