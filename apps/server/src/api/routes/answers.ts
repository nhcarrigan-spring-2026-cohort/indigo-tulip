import { Router } from "express";
import {
  getAnswers,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} from "../controllers/answerController";

const router = Router();

// GET all answers
router.get("/", getAnswers);

// POST a new answer
router.post("/", createAnswer);

// PUT update an answer by ID
router.put("/:id", updateAnswer);

// DELETE an answer by ID
router.delete("/:id", deleteAnswer);

export default router;
