import { Request, Response } from "express";
import prisma from "../../lib/prisma";

// Get all answers
export const getAnswers = async (req: Request, res: Response) => {
  try {
    const answers = await prisma.answer.findMany({
      include: { author: true, question: true, comments: true }, // include comments too
    });
    res.json(answers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch answers" });
  }
};

// Create an answer
export const createAnswer = async (req: Request, res: Response) => {
  try {
    const { body, authorId, questionId } = req.body;
    const answer = await prisma.answer.create({
      data: { body, authorId, questionId },
    });
    res.json(answer);
  } catch (err) {
    res.status(500).json({ error: "Failed to create answer" });
  }
};

// Update an answer
export const updateAnswer = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const { body } = req.body;
    const answer = await prisma.answer.update({
      where: { id },
      data: { body },
    });
    res.json(answer);
  } catch (err) {
    res.status(500).json({ error: "Failed to update answer" });
  }
};

// Delete an answer
export const deleteAnswer = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    await prisma.answer.delete({ where: { id } });
    res.json({ message: "Answer deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete answer" });
  }
};
