import express from "express";
import axios from "axios";

const router = express.Router();

// Fetch Wikipedia page views
router.get("/views/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const WIKI_VIEWS_URL = `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/${encodeURIComponent(title)}/daily/20240101/20240301`;

    const response = await axios.get(WIKI_VIEWS_URL);

    const views = response.data.items.map((day) => ({
      date: day.timestamp.substring(0, 8),
      views: day.views,
    }));

    res.json({ title, views });
  } catch (error) {
    console.error("❌ Wikipedia API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch Wikipedia page views" });
  }
});

// Fetch Wikipedia article content
router.get("/content/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const WIKI_PAGE_URL = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

    const response = await axios.get(WIKI_PAGE_URL);

    res.json({
      title: response.data.title,
      extract: response.data.extract, // Page summary
      url: response.data.content_urls.desktop.page, // Wikipedia URL
    });
  } catch (error) {
    console.error("❌ Wikipedia API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch Wikipedia page content" });
  }
});

export default router;