import express from "express";
import "dotenv/config";
import { userRouter } from "./routes/signupRoutes.js";
import { gameRouter } from "./routes/gameRoutes.js";
import { isSignedOn } from "./middleware/AuthenticationMiddleware.js";
import cors from "cors";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/game", isSignedOn, gameRouter);

app.get("/", (req, res) => {
  res.send("Im alive");
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
