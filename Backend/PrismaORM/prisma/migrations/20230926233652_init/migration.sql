-- CreateTable
CREATE TABLE "Camada" (
    "id" SERIAL NOT NULL,
    "nombre" INTEGER NOT NULL,
    "dias" TEXT,
    "modulo" TEXT,

    CONSTRAINT "Camada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "camada" INTEGER NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Camada_nombre_key" ON "Camada"("nombre");

-- AddForeignKey
ALTER TABLE "Alumno" ADD CONSTRAINT "Alumno_camada_fkey" FOREIGN KEY ("camada") REFERENCES "Camada"("nombre") ON DELETE RESTRICT ON UPDATE CASCADE;
