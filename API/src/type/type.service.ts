//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Type = {
    id: number;
    type: string,
}

// servico para pegar todos os tipos de vinho.               ....
export const getTypes = async (): Promise<Type[]> => {
    return await db.type.findMany({
        select: {
            id: true,
            type: true,
        }

    })
}


//servico para pegar o tipo pelo ID
export const getTypeById = async (id: number): Promise<Type | null> => {
    return db.type.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            type: true,
        }
    })
}

// servico para criar um novo tipo de vinho
export const createType = async (type: Omit<Type, "id">): Promise<Type> => {
    return db.type.create({
        data: type,
        select: {
            id: true,
            type: true,
        }
    })
}

// servico para atualizar um tipo de vinho
export const updateType = async (type: Omit<Type, "id">, id: number): Promise<Type> => {
    return db.type.update({
        where: {
            id: id
        },
        data: type,
        select: {
            id: true,
            type: true,
        }
    })
}

// servico para deletar um tipo de vinho
export const deleteTypeById = async (id: number): Promise<Type | null> => {
    return db.type.delete({
        where: {
            id: id
        }
    })
}