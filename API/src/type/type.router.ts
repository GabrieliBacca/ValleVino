import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as TypeService from "./type.service"
import { request } from "http"

export const TypeRouter = express.Router()


// para criar uma rota sem variável
TypeRouter.get("/", async (request: Request, response: Response) => {
    try {

        const harmony = await TypeService.getTypes();
        return response.status(200).json(harmony)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
TypeRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const type = await TypeService.getTypeById(id)
        if (type)
            return response.status(200).json(type)
        else
            return response.status(404).json("Tipo de vinho não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})

// rota para criar uma nova harmonização
TypeRouter.post('/', body("type").isString(),
    async (request: Request, response: Response) => {
        try {
            const type = request.body
            const Newtype = await TypeService.createType(type)
            return response.status(201).json(Newtype)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })

// rota para atualizar um tipo de vinho
TypeRouter.put('/:id', body("type").isString(),
    async (request: Request, response: Response) => {
        try {
            const type = request.body
            const id = parseInt(request.params.id)   // ID vem da ROTA
            const updateType = await TypeService.updateType(type, id)
            return response.status(201).json(updateType)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    })

// rota para deletar um tipo de vinho
TypeRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const type = await TypeService.deleteTypeById(id)
        if (type)
            return response.status(200).json(`Tipo deletado com sucesso!`)
        else
            return response.status(404).json("Tipo não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})