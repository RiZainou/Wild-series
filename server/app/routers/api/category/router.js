const express = require("express");

const router = express.Router();

const {
  getCategories,
  getCategoryId,
} = require("../../../controllers/categoryActions");

router.get("/", getCategories);
router.get("/:id", getCategoryId);

module.exports = router;
