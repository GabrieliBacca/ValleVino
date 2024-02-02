-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "wineId" INTEGER,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_wineId_fkey" FOREIGN KEY ("wineId") REFERENCES "Wine" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Shopping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "shopping" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Shopping_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Grape" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grape" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Harmony" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "harmony" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Wine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "grapeId" INTEGER NOT NULL,
    CONSTRAINT "Wine_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wine_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wine_grapeId_fkey" FOREIGN KEY ("grapeId") REFERENCES "Grape" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WineHarmony" (
    "wineId" INTEGER NOT NULL,
    "harmonyId" INTEGER NOT NULL,

    PRIMARY KEY ("wineId", "harmonyId"),
    CONSTRAINT "WineHarmony_wineId_fkey" FOREIGN KEY ("wineId") REFERENCES "Wine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WineHarmony_harmonyId_fkey" FOREIGN KEY ("harmonyId") REFERENCES "Harmony" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Type_type_key" ON "Type"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Country_country_key" ON "Country"("country");

-- CreateIndex
CREATE UNIQUE INDEX "Grape_grape_key" ON "Grape"("grape");

-- CreateIndex
CREATE UNIQUE INDEX "Harmony_harmony_key" ON "Harmony"("harmony");
