//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Country = {
    id: number;
    country: string,
}

// servico para pegar todos os paises.               ....
export const getCountrys = async (): Promise<Country[]> => {
    return await db.country.findMany({
        select: {
            id: true,
            country: true,
        }

    })
}


//servico para pegar o pais pelo ID
export const getCountryById = async (id: number): Promise<Country | null> => {
    return db.country.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            country: true,
        }
    })
}

// servico para criar um novo pais
export const createCountry = async (country: Omit<Country, "id">): Promise<Country> => {
    return db.country.create({
        data: country,
        select: {
            id: true,
            country: true,
        }
    })
}

// servico para atualizar um  pais
export const updateCountry = async (country: Omit<Country, "id">, id: number): Promise<Country> => {
    return db.country.update({
        where: {
            id: id
        },
        data: country,
        select: {
            id: true,
            country: true,
        }
    })
}

// servico para deletar um  pais
export const deleteCountryById = async (id: number): Promise<Country | null> => {
    return db.country.delete({
        where: {
            id: id
        }
    })
}