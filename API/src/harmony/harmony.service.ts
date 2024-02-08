//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Harmony = {
    id: number;
    harmony: string,
}

// servico para pegar todos as harmonizações.               ....
export const getHarmonies = async (): Promise<Harmony[]> => {
    return await db.harmony.findMany({
        select: {
            id: true,
            harmony: true,
        }

    })
}


//servico para pegar a harmonização pelo ID
export const getHarmonyById = async (id: number): Promise<Harmony | null> => {
    return db.harmony.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            harmony: true,
        }
    })
}

// servico para criar uma nova harmonização
export const createHarmony = async (harmony: Omit<Harmony, "id">): Promise<Harmony> => {
    return db.harmony.create({
        data: harmony,
        select: {
            id: true,
            harmony: true,
        }
    })
}

// servico para atualizar uma harmonização
export const updateHarmony = async (harmony: Omit<Harmony, "id">, id: number): Promise<Harmony> => {
    return db.harmony.update({
        where: {
            id: id
        },
        data: harmony,
        select: {
            id: true,
            harmony: true,
        }
    })
}

// servico para deletar uma harmonização
export const deleteHarmonyById = async (id: number): Promise<Harmony | null> => {
    return db.harmony.delete({
        where: {
            id: id
        }
    })
}