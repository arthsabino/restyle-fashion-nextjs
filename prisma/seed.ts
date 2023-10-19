import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.product.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.category.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.orderStatus.deleteMany();
  await prisma.category.createMany({
    data: [{ name: "Dresses" }, { name: "Skirts" }, { name: "Shorts" }],
  });
  await prisma.tag.createMany({
    data: [{ name: "NEW" }, { name: "FEATURED" }, { name: "HOT" }],
  });
  await prisma.orderStatus.createMany({
    data: [{ name: "PENDING" }, { name: "COMPLETED" }],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
