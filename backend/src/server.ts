import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// test endpoint
app.get("/", (_req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => {
  console.log(`Server works on http://localhost:${PORT}`);
});
