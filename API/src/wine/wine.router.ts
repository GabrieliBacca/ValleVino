import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as WineService from "./wine.service"
import { request } from "http"

export const WineRouter = express.Router()


// para criar uma rota sem variável
WineRouter.get("/", async (request: Request, response: Response) => {
    try {

        const wines = await WineService.getWines();
        return response.status(200).json(wines)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
WineRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const wine = await WineService.getWineById(id)
        if (wine)
            return response.status(200).json(wine)
        else
            return response.status(404).json("Usuário não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})


// rota para criar um novo vinho
WineRouter.post('/',
    body("label").isString(),
    body("quantity").isNumeric(),
    body("price").isNumeric(),
    body("year").isNumeric(),
    body("vinicula").isString(),
    body("alchoolic").isNumeric(),
    body("description").isString(),
    body("typeId").isNumeric(),
    body("countryId").isNumeric(),
    body("grapeId").isNumeric(),
    body("harmonyId").isNumeric(),
    async (request: Request, response: Response) => {
        try {
            const { typeId, countryId, grapeId, harmonyId, ...newWineData } = request.body;
            const newWine = await WineService.createWine(newWineData, typeId, countryId, grapeId, harmonyId);
            return response.status(201).json(newWine);
        } catch (error: any) {
            return response.status(500).json(error.message);
        }
    }
);
// rota para atualizar um vinho
WineRouter.put('/:id',
    body("label").isString(),
    body("quantity").isNumeric(),
    body("price").isNumeric(),
    body("year").isNumeric(),
    body("vinicula").isString(),
    body("alchoolic").isNumeric(),
    body("description").isString(),
    body("typeId").isNumeric(),
    body("countryId").isNumeric(),
    body("grapeId").isNumeric(),
    body("harmonyId").isNumeric(),
    async (request: Request, response: Response) => {
        try {
            const { typeId, countryId, grapeId, harmonyId, ...wineData } = request.body;
            const id = parseInt(request.params.id);
            const updateWine = await WineService.updateWine(wineData, id, typeId, countryId, grapeId, harmonyId);
            return response.status(201).json(updateWine);
        } catch (error: any) {
            return response.status(500).json(error.message);
        }
    }
);

// rota para deletar um vinho
WineRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const wine = await WineService.deleteWineById(id)
        if (wine)
            return response.status(200).json(`Vinho deletado com sucesso!`)
        else
            return response.status(404).json("Vinho não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})