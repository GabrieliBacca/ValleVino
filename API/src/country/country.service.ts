//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Country = {
    id: number;
    country: string,
}

// ARRUMAR....
// seria isso aqui   async function   = async (): Promise<Author[]> => {}               ....
export const getAuthors = async (): Promise<Author[]> => {
    // const author = await db.author.findMany()   // ou pode tirar o const e colocar direto no return....
    return await db.author.findMany({
        select: {
            id: true,
            firsName: true,
            lastName: true
        }

    })
}

export const getAuthorsById = async (id: number): Promise<Author | null> => {
    return db.author.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            firsName: true,
            lastName: true
        }
    })
}

//nesse modelo o Omit vai omitir o campo ID do Author....semelhante ao uso do select e false no atributo....
export const createAuthor = async (author: Omit<Author, "id">): Promise<Author> => {
    return db.author.create({
        data: author,
        select: {
            id: true,
            firsName: true,
            lastName: true
        }
    })
}

// o Omit omite o ID do Front pelo JSON ao pedir mas pega o ID da ROTA
export const updateAuthor = async (author: Omit<Author, "id">, id: number): Promise<Author> => {
    return db.author.update({
        where: {
            id: id
        },
        data: author,
        select: {
            id: true,
            firsName: true,
            lastName: true
        }
    })
}

export const deleteAuthorById = async (id: number): Promise<Author | null> => {
    return db.author.delete({
        where: {
            id: id
        }
    })
}