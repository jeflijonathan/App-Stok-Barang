import { seedRole } from "./roleSeeder";
import { seedUser } from "./userSeeder";

const arg = process.argv[2];
const listSeeder = [
  { name: "role", seeder: seedRole },
  { name: "user", seeder: seedUser },
];

async function main() {
  if (arg === "all") {
    for (const item of listSeeder) {
      await item.seeder();
    }
  } else {
    const target = listSeeder.find((item) => item.name === arg);
    if (!target) {
      console.log("Seeder not found for:", arg);
      return;
    }
    await target.seeder();
  }
}

main()
  .then(() => {
    console.log("Seeding complete");
  })
  .catch((e) => {
    console.error("Error while seeding:", e);
    process.exit(1);
  });
