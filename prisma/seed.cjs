const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
const youtubers = [
    {
        id: 1,
        nome: "Aline Santos",
        canal: "Aline Tech",
        categoria: "Tecnologia e Reviews",
        inscritos: 850000,
        videos: 215,
        visualizacoes: 45000000,
        pais: "Brasil"
    },
    {
        id: 2,
        nome: "David Müller",
        canal: "Cooking with Dave",
        categoria: "Culinária e Receitas",
        inscritos: 1200000,
        videos: 350,
        visualizacoes: 98000000,
        pais: "Alemanha"
    },
    {
        id: 3,
        nome: "Sofia Rodriguez",
        canal: "TravelSofia",
        categoria: "Viagem e Vlog",
        inscritos: 450000,
        videos: 95,
        visualizacoes: 22000000,
        pais: "Espanha"
    },
    {
        id: 4,
        nome: "Chen Wei",
        canal: "Gaming Master CW",
        categoria: "Jogos e Gameplay",
        inscritos: 2500000,
        videos: 610,
        visualizacoes: 350000000,
        pais: "China"
    },
    {
        id: 5,
        nome: "Leticia Oliveira",
        canal: "Estudos & Foco",
        categoria: "Educação e Produtividade",
        inscritos: 320000,
        videos: 150,
        visualizacoes: 15500000,
        pais: "Brasil"
    }
];

for (const youtuber of youtubers) {
    await prisma.youtubers.create({ data: youtuber });
  }

  console.log('Seed completo!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });