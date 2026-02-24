import { Request, Response } from "express";
import prisma from "../../lib/prisma";

// Get all comments
export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await prisma.comment.findMany({
      include: { author: true, answer: true },
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// Create a comment
export const createComment = async (req: Request, res: Response) => {
  try {
    const { body, authorId, answerId } = req.body;
    const comment = await prisma.comment.create({
      data: { body, authorId, answerId },
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

// Update a comment
export const updateComment = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id; // normalize to string
    const { body } = req.body;
    const comment = await prisma.comment.update({
      where: { id },
      data: { body },
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to update comment" });
  }
};

// Delete a comment
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id; // normalize to string
    await prisma.comment.delete({ where: { id } });
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};
