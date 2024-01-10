import { PrismaClient } from "@prisma/client";
import { createUser } from "../src/users";

const prisma = new PrismaClient();

async function seedDatabase() {
  const user = await createUser("test@test.com", "Test123!", {
    givenName: "Bert",
    familyName: "Sienna",
  });

  console.info("User created:", user);
}

seedDatabase()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error("Failed to seed database!");
    console.error(err);

    await prisma.$disconnect();

    process.exit(1);
  });
