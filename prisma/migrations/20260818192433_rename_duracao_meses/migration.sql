-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idModulo" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipoConteudo" TEXT NOT NULL,
    "urlConteudo" TEXT NOT NULL,
    "duracaoMinutos" INTEGER NOT NULL,
    "ordem" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Aula" ("createdAt", "duracaoMinutos", "id", "idModulo", "ordem", "tipoConteudo", "titulo", "updatedAt", "urlConteudo") SELECT "createdAt", "duracaoMinutos", "id", "idModulo", "ordem", "tipoConteudo", "titulo", "updatedAt", "urlConteudo" FROM "Aula";
DROP TABLE "Aula";
ALTER TABLE "new_Aula" RENAME TO "Aula";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
