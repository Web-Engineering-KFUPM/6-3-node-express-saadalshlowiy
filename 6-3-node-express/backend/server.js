import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to the Random Quote API");
});

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});