import { encrypt } from "@common/utils/encrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const seedUser = async () => {
  await prisma.user.create({
    data: {
      username: "Admin",
      email: "admin@example.com",
      password: await encrypt("admin123"),
      roleId: 1,
      status: true,
    },
  });
  console.log("User seeding done.");
};
