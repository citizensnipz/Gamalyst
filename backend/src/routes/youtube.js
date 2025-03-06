import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3";

// Fetch latest videos from a specific YouTube channel
router.get("/channel/:channelId", async (req, res) => {
  try {
    const { channelId } = req.params;

    const response = await axios.get(`${YOUTUBE_API_URL}/search`, {
      params: {
        key: YOUTUBE_API_KEY,
        channelId,
        part: "snippet",
        order: "date",
        maxResults: 5,
      },
    });

    const videos = response.data.items.map((video) => ({
      video_id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      published_at: video.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    }));

    res.json(videos);
  } catch (error) {
    console.error("❌ YouTube API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch YouTube channel videos" });
  }
});

// Fetch video engagement (views, likes, comments)
router.get("/video/:videoId", async (req, res) => {
  try {
    const { videoId } = req.params;

    const response = await axios.get(`${YOUTUBE_API_URL}/videos`, {
      params: {
        key: YOUTUBE_API_KEY,
        id: videoId,
        part: "statistics,snippet",
      },
    });

    const video = response.data.items[0];

    res.json({
      title: video.snippet.title,
      views: video.statistics.viewCount,
      likes: video.statistics.likeCount,
      comments: video.statistics.commentCount,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });
  } catch (error) {
    console.error("❌ YouTube API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch YouTube video stats" });
  }
});

export default router;