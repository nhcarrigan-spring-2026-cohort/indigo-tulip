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


export const getQuestionById = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    const question = await prisma.question.findUnique({
      where: { id },
      include: {
        author: { select: { name: true } },
        answers: {
          include: {
            author: { select: { name: true } },
            comments: { include: { author: { select: { name: true } } } }
          }
        }
      }
    });

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json(question);
  } catch (err) {
    console.error("Error fetching question:", err);
    res.status(500).json({ error: "Failed to fetch question" });
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
    // Delete comments for all answers of this question
     await prisma.comment.deleteMany({ where: { answer: { questionId: id } } }); 
     // Delete answers for this question 
     await prisma.answer.deleteMany({ where: { questionId: id } });
    //  // Finally delete the question 
    await prisma.question.delete({ where: { id } });
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete question" });
  }
};
