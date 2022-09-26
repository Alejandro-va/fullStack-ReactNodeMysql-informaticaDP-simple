import express from "express";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogControllers.js";

const router = express.Router();

router.get("/", getAllBlogs); //toda la bd
router.get("/:id", getBlog); //un solo registro
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
