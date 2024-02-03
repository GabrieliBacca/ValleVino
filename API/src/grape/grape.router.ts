import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as GrapeService from "./grape.service"
import { request } from "http"

export const GrapeRouter = express.Router()


// para criar uma rota sem variável
GrapeRouter.get("/", async (request: Request, response: Response) => {
    try {

        const grape = await GrapeService.getGrapes();
        return response.status(200).json(grape)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
GrapeRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const grape = await GrapeService.getGrapeById(id)
        if (grape)
            return response.status(200).json(grape)
        else
            return response.status(404).json("Uva não encontrada")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})

// rota para criar uma nova uva
GrapeRouter.post('/', body("grape").isString(),
    async (request: Request, response: Response) => {
        try {
            const grape = request.body
            const Newgrape = await GrapeService.createGrape(grape)
            return response.status(201).json(Newgrape)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })

// rota para atualizar uma uva
GrapeRouter.put('/:id', body("grape").isString(),
    async (request: Request, response: Response) => {
        try {
            const grape = request.body
            const id = parseInt(request.params.id)   // ID vem da ROTA
            const updateGrape = await GrapeService.updateGrape(grape, id)
            return response.status(201).json(updateGrape)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    })

// rota para deletar uma uva
GrapeRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const grape = await GrapeService.deleteGrapeById(id)
        if (grape)
            return response.status(200).json(`Uva deletada com sucesso!`)
        else
            return response.status(404).json("Uva não encontrada")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})