-- CreateTable
CREATE TABLE "youtubers" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "canal" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "inscritos" DOUBLE PRECISION NOT NULL,
    "videos" DOUBLE PRECISION NOT NULL,
    "visualizacoes" DOUBLE PRECISION NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "youtubers_pkey" PRIMARY KEY ("id")
);
