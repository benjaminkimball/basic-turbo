import { PrismaClient } from "@prisma/client";

const isDev = process.env.NODE_ENV !== "production";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: isDev ? ["info", "query", "warn", "error"] : [] });

if (isDev) globalForPrisma.prisma = prisma;
