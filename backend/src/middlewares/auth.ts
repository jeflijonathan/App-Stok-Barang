import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const payload = verifyToken<{ userId: number }>(token);
    (req as any).user = payload; // You may type this better
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}
