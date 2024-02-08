//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Wine = {
    id: number,
    label: string,
    price: number,
    quantity: number,
    year: number,
    vinicula: string,
    alchoolic: number,
    description: string,
    img: string,



}

// servico para pegar todos os vinhos.               .... 
export const getWines = async (): Promise<any[]> => {
    // Obter usuários do banco de dados
    const wines = await db.wine.findMany({
        select: {
            id: true,
            label: true,
            price: true,
            quantity: true,
            year: true,
            vinicula: true,
            alchoolic: true,
            description: true,
            type: { select: { type: true } },
            country: { select: { country: true } },
            grape: { select: { grape: true } },
            harmony: true,
            review: true,
            img: true,

        }
    });

    // Usar o Map nos wines para retornar somente os dados necessários
    const formattedWines = wines.map(wine => ({
        ...wine,
        type: wine.type.type,
        country: wine.country.country,
        grape: wine.grape.grape
    }));

    return formattedWines;
}


//servico para pegar um vinho pelo ID
export const getWineById = async (id: number): Promise<any | null> => {
    const wine = await db.wine.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            label: true,
            price: true,
            quantity: true,
            year: true,
            vinicula: true,
            alchoolic: true,
            description: true,
            img: true,



        }
    });
    return wine
}

// servico para criar um novo vinho
export const createWine = async (newWineData: Omit<Wine, "id">, typeId: number, countryId: number, grapeId: number, harmonyId: number): Promise<Wine> => {
    return await db.wine.create({
        data: {
            label: newWineData.label,
            price: newWineData.price,
            quantity: newWineData.quantity,
            vinicula: newWineData.vinicula,
            year: newWineData.year,
            alchoolic: newWineData.alchoolic,
            description: newWineData.description,
            type: { connect: { id: typeId } },
            country: { connect: { id: countryId } },
            grape: { connect: { id: grapeId } },
            harmony: { connect: { id: harmonyId } },
            img: newWineData.img,

        },
        select: {
            id: true,
            label: true,
            price: true,
            quantity: true,
            year: true,
            vinicula: true,
            alchoolic: true,
            description: true,
            type: true,
            country: true,
            grape: true,
            harmony: true,
            review: true,
            img: true,


        }
    });
}



// servico para atualizar um vinho
export const updateWine = async (newWineData: Omit<Wine, "id">, id: number, typeId: number, countryId: number, grapeId: number, harmonyId: number): Promise<Wine> => {
    return db.wine.update({
        where: {
            id: id
        },
        data: {
            label: newWineData.label,
            price: newWineData.price,
            quantity: newWineData.quantity,
            vinicula: newWineData.vinicula,
            year: newWineData.year,
            alchoolic: newWineData.alchoolic,
            description: newWineData.description,
            type: { connect: { id: typeId } },
            country: { connect: { id: countryId } },
            grape: { connect: { id: grapeId } },
            harmony: { connect: { id: harmonyId } },
            img: newWineData.img,
        },
        select: {
            id: true,
            label: true,
            price: true,
            quantity: true,
            year: true,
            vinicula: true,
            alchoolic: true,
            description: true,
            type: true,
            country: true,
            grape: true,
            harmony: true,
            review: true,
            img: true,

        }
    })
}

// servico para deletar um vinho
export const deleteWineById = async (id: number): Promise<Wine | null> => {
    return db.wine.delete({
        where: {
            id: id
        }
    })
}


//modelo JSON para adicionar/atualizar um vinho:

// {
//     "label": "Angelica Zapata Cabernet Franc",
//         "price": 145.00,
//             "quantity": 1,
//                 "vinicula": "Catena Zapata",
//                     "year": 2019,
//                         "alchoolic": 14.00,
//                             "description": "Angelica Zapata Cabernet Franc é uma prova de que a Argentina não se resume apenas à Malbec. A Cabernet Franc origina vinhos fantásticos no país, principalmente nas mãos da Catena – produtor que faz muito sucesso entre os clientes da Vino Mundi. O vinho é elegância pura. Longo, persistente e com a intensidade de um tinto que descansou por 18 meses em carvalho.",
//                                 "typeId": 2,
//                                     "countryId": 3,
//                                         "grapeId": 10,
//                                             "harmonyId": 1,
//                                              "img: "",
// }
