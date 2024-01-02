"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import * as bcrypt from "bcryptjs";
import { db } from "@/lib/database";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: errMessage[0] };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: errMessage[1] };

  await db.user.create({
    data: { name, email, password: hashedPassword },
  });

  // TODO: Send verification token email

  return { success: "User created!" };
};

const errMessage = {
  0: "Invalid Fields!",
  1: "Email is already in user!",
};
