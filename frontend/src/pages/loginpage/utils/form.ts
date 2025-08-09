import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginRequestModel } from "@api/users/model";
import * as z from "zod";

export const LoginreqDefaultValues: LoginRequestModel = {
  email: "",
  password: "",
};

export const LoginValidations = zodResolver(
  z.object({
    email: z.email({ message: "Invalid email" }),
    password: z.string({ error: "Password is required" }),
  })
);

export const LoginDetailsFormatter = (
  data: LoginRequestModel
): LoginRequestModel => {
  return {
    email: data?.email,
    password: data?.password,
  };
};
