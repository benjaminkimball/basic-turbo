import { createId } from "@paralleldrive/cuid2";
import { User } from "@prisma/client";
import { hashPassword } from "./authn";
import { prisma } from "./database";

export async function createUser(
  email: string,
  password: string,
  data: {
    givenName?: string | undefined;
    familyName?: string | undefined;
  } = {},
): Promise<User> {
  return prisma.user.create({
    data: {
      id: createId(),
      email,
      ...hashPassword(password),
      ...data,
    },
  });
}

export async function findUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}
