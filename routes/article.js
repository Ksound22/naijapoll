const express = require("express");
const router = express.Router();

const {
  createArticle,
  getAllArticles,
  getSingleArticle,
  recentArticles,
  updateArticle,
  deleteArticle,
} = require("../controllers/article");

// Create article
router.post("/articles", createArticle);

// Get all articles
router.get("/articles", getAllArticles);

// Get single article
router.get("/article/:id", getSingleArticle);

// Get recent articles
router.get("/recentArticles", recentArticles);

// Update article
router.put("/article/:id", updateArticle);

// Delete article
router.delete("/article/:id", deleteArticle);

module.exports = router;
