//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Grape = {
    id: number;
    grape: string,
}

// servico para pegar todos as uvas.               ....
export const getGrapes = async (): Promise<Grape[]> => {
    return await db.grape.findMany({
        select: {
            id: true,
            grape: true,
        }

    })
}


//servico para pegar a uva pelo ID
export const getGrapeById = async (id: number): Promise<Grape | null> => {
    return db.grape.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            grape: true,
        }
    })
}

// servico para criar uma nova uva
export const createGrape = async (grape: Omit<Grape, "id">): Promise<Grape> => {
    return db.grape.create({
        data: grape,
        select: {
            id: true,
            grape: true,
        }
    })
}

// servico para atualizar uma uva
export const updateGrape = async (grape: Omit<Grape, "id">, id: number): Promise<Grape> => {
    return db.grape.update({
        where: {
            id: id
        },
        data: grape,
        select: {
            id: true,
            grape: true,
        }
    })
}

// servico para deletar uma uva
export const deleteGrapeById = async (id: number): Promise<Grape | null> => {
    return db.grape.delete({
        where: {
            id: id
        }
    })
}