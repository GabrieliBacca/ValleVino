/*
  Warnings:

  - You are about to alter the column `alchoolic` on the `Wine` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "vinicula" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "alchoolic" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "grapeId" INTEGER NOT NULL,
    "harmonyId" INTEGER NOT NULL,
    "shoppingId" INTEGER,
    CONSTRAINT "Wine_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wine_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wine_grapeId_fkey" FOREIGN KEY ("grapeId") REFERENCES "Grape" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wine_harmonyId_fkey" FOREIGN KEY ("harmonyId") REFERENCES "Harmony" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wine_shoppingId_fkey" FOREIGN KEY ("shoppingId") REFERENCES "Shopping" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Wine" ("alchoolic", "countryId", "description", "grapeId", "harmonyId", "id", "img", "label", "price", "quantity", "shoppingId", "typeId", "vinicula", "year") SELECT "alchoolic", "countryId", "description", "grapeId", "harmonyId", "id", "img", "label", "price", "quantity", "shoppingId", "typeId", "vinicula", "year" FROM "Wine";
DROP TABLE "Wine";
ALTER TABLE "new_Wine" RENAME TO "Wine";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
