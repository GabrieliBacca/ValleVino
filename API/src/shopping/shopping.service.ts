//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Shopping = {
    id: number,
    shopping: string,
}

// servico para pegar todos as compras.                         
export const getShoppings = async (): Promise<Shopping[]> => {
    const shoppings = await db.shopping.findMany({
        select: {
            id: true,
            shopping: true,

        }
    });

    return shoppings; // retornar as compras obtidas do banco de dados
}


//servico para pegar uma compra pelo ID
export const getshoppingById = async (id: number): Promise<any | null> => {
    const shopping = await db.shopping.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            shopping: true,

        }
    });
    return shopping;
}

// servico para criar uma nova commpra
export const createShopping = async (shopping: Shopping, userId: number): Promise<Shopping> => {
    return db.shopping.create({
        data: {
            shopping: shopping.shopping,
            user: { connect: { id: userId } }
        },
        select: {
            id: true,
            shopping: true
        }
    });
}
// servico para atualizar uma compra
export const updateShopping = async (shopping: Omit<Shopping, "id">, id: number, userId: number): Promise<Shopping> => {
    return db.shopping.update({
        where: {
            id: id
        },
        data: {
            shopping: shopping.shopping,
            user: { connect: { id: userId } }
        },
        select: {
            id: true,
            shopping: true,

        }
    })
}

// servico para deletar uma compra
export const deleteShoppingById = async (id: number): Promise<Shopping | null> => {
    return db.shopping.delete({
        where: {
            id: id
        }
    })
}