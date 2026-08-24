-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "idInstrutor" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "nivel" TEXT NOT NULL,
    "dataPublicacao" DATETIME NOT NULL,
    "totalHoras" INTEGER NOT NULL,
    "preco" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Curso" ("createdAt", "dataPublicacao", "descricao", "id", "idCategoria", "idInstrutor", "nivel", "preco", "titulo", "totalHoras", "updatedAt") SELECT "createdAt", "dataPublicacao", "descricao", "id", "idCategoria", "idInstrutor", "nivel", "preco", "titulo", "totalHoras", "updatedAt" FROM "Curso";
DROP TABLE "Curso";
ALTER TABLE "new_Curso" RENAME TO "Curso";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
