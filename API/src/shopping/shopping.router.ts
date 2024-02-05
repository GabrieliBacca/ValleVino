import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as ShoppingService from "./shopping.service"
import { request } from "http"

export const ShoppingRouter = express.Router()


// para criar uma rota sem variável
ShoppingRouter.get("/", async (request: Request, response: Response) => {
    try {

        const user = await ShoppingService.getShoppings();
        return response.status(200).json(user)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
ShoppingRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const shopping = await ShoppingService.getshoppingById(id);
        if (shopping) {
            return response.status(200).json(shopping);
        } else {
            return response.status(404).json("Compra não encontrada");
        }
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});
// rota para criar uma nova compra
ShoppingRouter.post('/', body("shopping").isString(), body("userId").isNumeric(),
    async (request: Request, response: Response) => {
        try {
            const shopping = request.body
            const newShopping = await ShoppingService.createShopping(shopping, shopping.userId) // use userId em vez de userid
            return response.status(201).json(newShopping)
        }
        catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
)
// rota para atualizar uma compra
ShoppingRouter.put('/:id', body("shopping").isString(), body("userId").isNumeric(),
    async (request: Request, response: Response) => {
        try {
            const shopping = request.body
            const id = parseInt(request.params.id) // ID vem da ROTA
            const updateShopping = await ShoppingService.updateShopping(shopping, shopping.userId, id) // use userId em vez de userid
            return response.status(201).json(updateShopping)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    }
)
// rota para deletar uma compra
ShoppingRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const shopping = await ShoppingService.deleteShoppingById(id)
        if (shopping)
            return response.status(200).json(`Commpra deletada com sucesso!`)
        else
            return response.status(404).json("Compra não encontrada")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})