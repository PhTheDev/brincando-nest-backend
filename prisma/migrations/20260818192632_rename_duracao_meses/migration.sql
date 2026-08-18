/*
  Warnings:

  - You are about to drop the column `ducacaoMeses` on the `Plano` table. All the data in the column will be lost.
  - Added the required column `duracaoMeses` to the `Plano` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "duracaoMeses" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Plano" ("createdAt", "descricao", "id", "nome", "preco", "updatedAt") SELECT "createdAt", "descricao", "id", "nome", "preco", "updatedAt" FROM "Plano";
DROP TABLE "Plano";
ALTER TABLE "new_Plano" RENAME TO "Plano";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
