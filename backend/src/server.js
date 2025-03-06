import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import xRoutes from "./routes/x.js";
import redditRoutes from "./routes/reddit.js";
import wikiRoutes from "./routes/wiki.js";
import youtubeRoutes from "./routes/youtube.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/x", xRoutes);
app.use("/api/reddit", redditRoutes);
app.use("/api/wiki", wikiRoutes);
app.use("/api/youtube", youtubeRoutes);


export default app;
