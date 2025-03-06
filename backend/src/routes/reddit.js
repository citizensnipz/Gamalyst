import express from "express";
import axios from "axios";

const router = express.Router();

// Fetch latest comments from a specific Reddit user
router.get("/comments/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const REDDIT_COMMENTS_URL = `https://www.reddit.com/user/${username}/comments.json`;
  
      const response = await axios.get(REDDIT_COMMENTS_URL);
  
      const comments = response.data.data.children.map((comment) => ({
        id: comment.data.id,
        subreddit: comment.data.subreddit,
        post_title: comment.data.link_title || "Unknown Post", // 🔥 Title of the post the comment is on
        text: comment.data.body, // 🔥 Actual comment text
        awards: comment.data.total_awards_received,
        upvotes: comment.data.ups,
        downvotes: comment.data.downs,
        parent_id: comment.data.parent_id, // 🔥 If it's a reply to another comment
        url: `https://reddit.com${comment.data.permalink}`,
        created_at: new Date(comment.data.created_utc * 1000),
      }));
  
      res.json(comments);
    } catch (error) {
      console.error("❌ Reddit API Error:", error.message);
      res.status(500).json({ error: "Failed to fetch Reddit user comments" });
    }
  });

// Fetch latest posts from a specific Reddit user
router.get("/user/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const REDDIT_API_URL = `https://www.reddit.com/user/${username}/submitted.json`;

    const response = await axios.get(REDDIT_API_URL);

    const posts = response.data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      subreddit: post.data.subreddit,
      upvotes: post.data.ups,
      downvotes: post.data.downs,
      upvote_ratio: post.data.upvote_ratio, // 🔥 How many upvotes vs. downvotes
      comments: post.data.num_comments,
      awards: post.data.total_awards_received, // 🔥 Awards count
      post_type: post.data.is_self ? "Text" : post.data.post_hint || "Unknown", // 🔥 Text, image, link, video
      flair: post.data.link_flair_text || "None", // 🔥 Post flair
      url: `https://reddit.com${post.data.permalink}`,
      created_at: new Date(post.data.created_utc * 1000),
    }));

    res.json(posts);
  } catch (error) {
    console.error("❌ Reddit API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch Reddit user posts" });
  }
});

export default router;