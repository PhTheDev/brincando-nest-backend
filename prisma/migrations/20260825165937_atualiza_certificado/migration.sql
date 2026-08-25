-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Certificado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idUsuario" INTEGER NOT NULL,
    "idCurso" INTEGER NOT NULL,
    "codigoVerificacao" TEXT NOT NULL,
    "dataEmissao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Certificado" ("codigoVerificacao", "createdAt", "dataEmissao", "id", "idCurso", "idUsuario", "updatedAt") SELECT "codigoVerificacao", "createdAt", "dataEmissao", "id", "idCurso", "idUsuario", "updatedAt" FROM "Certificado";
DROP TABLE "Certificado";
ALTER TABLE "new_Certificado" RENAME TO "Certificado";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
