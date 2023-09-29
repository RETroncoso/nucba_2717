-- CreateTable
CREATE TABLE "Camada" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "diasDeCursada" TEXT NOT NULL,
    "modulo" TEXT NOT NULL,

    CONSTRAINT "Camada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "dni" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL,
    "camada" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Camada_nombre_key" ON "Camada"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Student_dni_key" ON "Student"("dni");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_camada_fkey" FOREIGN KEY ("camada") REFERENCES "Camada"("nombre") ON DELETE RESTRICT ON UPDATE CASCADE;
