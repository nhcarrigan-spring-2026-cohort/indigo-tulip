import { Router } from "express";
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/commentController";

const router = Router();

// GET all comments
router.get("/", getComments);

// POST a new comment
router.post("/", createComment);

// PUT update a comment by ID
router.put("/:id", updateComment);

// DELETE a comment by ID
router.delete("/:id", deleteComment);

export default router;
