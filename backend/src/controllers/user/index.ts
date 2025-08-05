import { Request, Response, NextFunction } from "express";
import { UserModel } from "./model";
import { ApiResponse, RequestHandler } from "@common/types";
import bcrypt from "bcrypt";
import { catchError } from "@common/errors/catchError";
import { PrismaClient } from "@prisma/client";
import { signToken } from "@common/utils/jwt";

const prisma = new PrismaClient();
export const getUsers: RequestHandler<ApiResponse<UserModel[]>> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const password = bcrypt.hashSync("admin123", 10);

  const data: UserModel[] = [
    {
      id: "1",
      name: "jefli jonathan",
      email: "",
      password: password,
      role: "user",
    },
  ];
  const search: UserModel[] = data.filter((user) => user.id == "1");
  const fetchData: Promise<UserModel[]> = Promise.resolve(search);

  const [error, result] = await catchError(fetchData);

  if (error) {
    next();
  } else {
    res.status(200).json([
      {
        status: true,
        statusCode: 200,
        message: "successfully get users data",
        data: result,
      },
    ]);
  }
};

export async function signup(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  const token = signToken({ userId: user.id });
  return { user, token };
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  const token = signToken({ userId: user.id });
  return { user, token };
}
