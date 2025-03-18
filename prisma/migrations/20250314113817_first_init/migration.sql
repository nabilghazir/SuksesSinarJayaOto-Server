-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galeri" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "Galeri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Katalog" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Katalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tentang" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Tentang_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
