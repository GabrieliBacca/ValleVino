import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as ReviewService from "./review.service"
import { request } from "http"

export const ReviewRouter = express.Router()


// para criar uma rota sem variável
ReviewRouter.get("/", async (request: Request, response: Response) => {
    try {

        const review = await ReviewService.getReviews();
        return response.status(200).json(review)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
ReviewRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const review = await ReviewService.getreviewById(id);
        if (review) {
            return response.status(200).json(review);
        } else {
            return response.status(404).json("Review não encontrado");
        }
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});
// rota para criar um novo review
ReviewRouter.post('/', body("shopping").isString(), body("userId").isNumeric(), body("wineId").isNumeric(),
    async (request: Request, response: Response) => {
        try {
            const review = request.body
            const newReview = await ReviewService.createReview(review, review.userId, review.wineId) // use userId em vez de userid
            return response.status(201).json(newReview)
        }
        catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
)
// rota para atualizar um review
ReviewRouter.put('/:id', body("shopping").isString(), body("userId").isNumeric(), body("wineId").isNumeric(),
    async (request: Request, response: Response) => {
        try {
            const review = request.body
            const id = parseInt(request.params.id) // ID vem da ROTA
            const updateReview = await ReviewService.updateReview(review, review.userId, review.wineId, id) // use userId em vez de userid
            return response.status(201).json(updateReview)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    }
)
// rota para deletar um review
ReviewRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const review = await ReviewService.deleteReview(id)
        if (review)
            return response.status(200).json(`Review deletado com sucesso!`)
        else
            return response.status(404).json("Review não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})