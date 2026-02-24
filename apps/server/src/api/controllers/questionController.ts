import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await prisma.question.findMany({
      include: { author: { select: { name: true }, 
     }, answers: { include: { author: { select: { name: true }, 
    }, comments: { include: { author: { select: { name: true }, 
       }, }, }, }, }, },
    });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { title, subject, body, authorId } = req.body;
    const question = await prisma.question.create({
      data: { title, subject, body, authorId },
    });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Failed to create question" });
  }
};
export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const { title, subject, body } = req.body;
    const question = await prisma.question.update({
      where: { id },
      data: { title, subject, body },
    });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Failed to update question" });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    await prisma.question.delete({ where: { id } });
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete question" });
  }
};
