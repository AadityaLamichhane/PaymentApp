-- CreateEnum
CREATE TYPE "TransferStatus" AS ENUM ('Success', 'faill');

-- CreateTable
CREATE TABLE "TransferToUser" (
    "id" SERIAL NOT NULL,
    "from_userId" INTEGER NOT NULL,
    "to_userId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "status" "TransferStatus" NOT NULL,

    CONSTRAINT "TransferToUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TransferToUser" ADD CONSTRAINT "TransferToUser_from_userId_fkey" FOREIGN KEY ("from_userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferToUser" ADD CONSTRAINT "TransferToUser_to_userId_fkey" FOREIGN KEY ("to_userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
