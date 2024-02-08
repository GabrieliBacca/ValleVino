import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as HarmonyService from "./harmony.service"
import { request } from "http"

export const HarmonyRouter = express.Router()


// para criar uma rota sem variável
HarmonyRouter.get("/", async (request: Request, response: Response) => {
    try {

        const harmony = await HarmonyService.getHarmonies();
        return response.status(200).json(harmony)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
HarmonyRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const harmony = await HarmonyService.getHarmonyById(id)
        if (harmony)
            return response.status(200).json(harmony)
        else
            return response.status(404).json("Harmonização não encontrada")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})

// rota para criar uma nova harmonização
HarmonyRouter.post('/', body("harmony").isString(),
    async (request: Request, response: Response) => {
        try {
            const harmony = request.body
            const Newharmony = await HarmonyService.createHarmony(harmony)
            return response.status(201).json(Newharmony)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })

// rota para atualizar uma harmonização
HarmonyRouter.put('/:id', body("harmony").isString(),
    async (request: Request, response: Response) => {
        try {
            const harmony = request.body
            const id = parseInt(request.params.id)   // ID vem da ROTA
            const updateHarmony = await HarmonyService.updateHarmony(harmony, id)
            return response.status(201).json(updateHarmony)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    })

// rota para deletar uma harmonização
HarmonyRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const harmony = await HarmonyService.deleteHarmonyById(id)
        if (harmony)
            return response.status(200).json(`Harmonização deletada com sucesso!`)
        else
            return response.status(404).json("Harmoniação não encontrada")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})