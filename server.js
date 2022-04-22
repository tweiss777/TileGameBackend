import express from "express";
import "dotenv/config";
import { userRouter } from "./routes/signupRoutes.js";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Im alive");
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
