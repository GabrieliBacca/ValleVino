//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....

import { type } from "os";
import { db } from "../utils/db.server";

export type Review = {
    id: number,
    review: string,
}

// servico para pegar todos os reviews.                         
export const getReviews = async (): Promise<Review[]> => {
    const reviews = await db.review.findMany({
        select: {
            id: true,
            review: true,

        }
    });

    return reviews; // retornar as compras obtidas do banco de dados
}


//servico para pegar um review pelo ID
export const getreviewById = async (id: number): Promise<any | null> => {
    const review = await db.review.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            review: true,

        }
    });
    return review;
}

// servico para criar um review
export const createReview = async (review: Review, userId: number, wineId: number): Promise<Review> => {
    return db.review.create({
        data: {
            review: review.review,
            user: { connect: { id: userId } },
            wine: { connect: { id: wineId } }
        },
        select: {
            id: true,
            review: true
        }
    });
}
// servico para atualizar um review
export const updateReview = async (review: Omit<Review, "id">, id: number, userId: number, wineId: number): Promise<Review> => {
    return db.review.update({
        where: {
            id: id
        },
        data: {
            review: review.review,
            user: { connect: { id: userId } },
            wine: { connect: { id: wineId } }
        },
        select: {
            id: true,
            review: true,

        }
    })
}

// servico para deletar um review
export const deleteReview = async (id: number): Promise<Review | null> => {
    return db.review.delete({
        where: {
            id: id
        }
    })
}