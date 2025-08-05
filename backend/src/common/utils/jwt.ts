import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

export function signToken(payload: object, expiresIn = "1d"): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken<T>(token: string): T {
  return jwt.verify(token, JWT_SECRET) as T;
}
