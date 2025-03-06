import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const X_API_URL = "https://api.twitter.com/2/tweets/search/recent";
const USER_TWEETS_URL = "https://api.twitter.com/2/users/44196397/tweets";
const BEARER_TOKEN = process.env.X_BEARER_TOKEN;

// router.get("/tweets", async (req, res) => {
//   try {
//     const { query } = req.query;
//     if (!query) return res.status(400).json({ error: "Query parameter required" });

//     const response = await axios.get(X_API_URL, {
//         headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
//         params: {
//           query,
//           max_results: 10,
//           "tweet.fields": "public_metrics",
//         },
//       });

router.get("/tweets", async (req, res) => {
    try {
      const response = await axios.get(USER_TWEETS_URL, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        params: {
          max_results: 10, // Pull last 10 tweets
          "tweet.fields": "public_metrics",
        },
      });

    res.json(response.data);
  } catch (error) {
    console.error("❌ X API Error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: "Failed to fetch tweets" });
  }
});

export default router;