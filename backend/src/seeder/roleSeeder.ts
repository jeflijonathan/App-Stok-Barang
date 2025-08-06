import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const seedRole = async () => {
  await prisma.role.createMany({
    data: [
      { name: "OWNER" },
      { name: "MANAJER" },
      { name: "SPV" },
      { name: "KETUATIM" },
      { name: "TIM" },
    ],
    skipDuplicates: true,
  });

  console.log("Role seeding done.");
};
