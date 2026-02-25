import { Request, Response } from "express";
import prisma from "../../lib/prisma";

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: { questions: true, answers: true },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Create a user (signup)
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name, password, role } = req.body;
    const user = await prisma.user.create({
      data: { email, name, password, role },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json(user); // later you’ll return a JWT instead
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
