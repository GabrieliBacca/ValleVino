//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type User = {
    id: number,
    name: string,
    email: string,
    password: string,
    address: string,
    birthday: Date,
    gender: string,
    telephone: bigint,
}

// servico para pegar todos os users.               .... 
export const getUsers = async (): Promise<any[]> => {
    // Obter usuários do banco de dados
    const users = await db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            address: true,
            birthday: true,
            gender: true,
            telephone: true,
        }
    });

    // Converter o campo telephone de bigint para string e retornar
    return users.map(user => ({
        ...user,
        telephone: user.telephone.toString()
    }));
}

//servico para pegar um user pelo ID
export const getUserById = async (id: number): Promise<any | null> => {
    const user = await db.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            address: true,
            birthday: true,
            gender: true,
            telephone: true,
        }
    });

    if (user) {
        return {
            ...user,
            telephone: user.telephone.toString()
        };
    } else {
        return null;
    }
}

// servico para criar um novo user
export const createUser = async (user: Omit<User, "id">): Promise<User> => {
    const newUser = {
        ...user,
        telephone: BigInt(user.telephone) // Convertendo para BigInt
    };

    // Convertendo a string de data para um objeto Date
    newUser.birthday = new Date(user.birthday);

    return db.user.create({
        data: newUser,
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            address: true,
            birthday: true,
            gender: true,
            telephone: true,
        }
    });
}

// servico para atualizar um user
export const updateUser = async (user: Omit<User, "id">, id: number): Promise<User> => {
    return db.user.update({
        where: {
            id: id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            address: true,
            birthday: true,
            gender: true,
            telephone: true,
        }
    })
}

// servico para deletar um user
export const deleteUserById = async (id: number): Promise<User | null> => {
    return db.user.delete({
        where: {
            id: id
        }
    })
}