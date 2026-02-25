import { Router } from "express";
import { getQuestions,getQuestionById, createQuestion, updateQuestion, deleteQuestion } from "../controllers/questionController";

const router = Router();
router.get("/", getQuestions);
router.post("/", createQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);
router.get("/:id", getQuestionById);


export default router;
