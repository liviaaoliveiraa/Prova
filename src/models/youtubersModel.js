import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const  encontreTodos =async () =>{
    return await prisma.youtubers.findMany({
        orderBy: { nome: 'asc' }
    });
};

export const encontreUm = async (id) => {
    return await prisma.youtubers.findUnique({
        where: { id: Number(id) }
    })

}

export const criar = async (data) => {
    return await prisma.youtubers.create({
        data:{
            nome: data.nome,
            canal: data.canal,
            pais: data.pais,
            categoria: data.categoria
        }
    })

}

export const deletar = async (id) => {
    return await prisma.youtubers.delete({
        where: { id: Number(id) }
    });
};


export const atualizar = async (id, dado ) => {
    return await prisma.youtubers.update({
        where: { id: Number(id) },
        data:{
            ...(dado.nome && { nome: dado.nome }),
            ...(dado.canal && { canal: dado.canal }),
            ...(dado.pais && { pais: dado.pais}),
            ...(dado.categoria && { categoria: dado.categoria})

        }
    })
}