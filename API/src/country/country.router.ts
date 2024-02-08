import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as CountryService from "./country.service"
import { request } from "http"

export const CountryRouter = express.Router()


// para criar uma rota sem variável
CountryRouter.get("/", async (request: Request, response: Response) => {
    try {

        const country = await CountryService.getCountrys();
        return response.status(200).json(country)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota com variável (no caso id)-> o nome apoós os : é o nome da variável
CountryRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const country = await CountryService.getCountryById(id)
        if (country)
            return response.status(200).json(country)
        else
            return response.status(404).json("Pais não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})

// rota para criar um novo pais
CountryRouter.post('/', body("country").isString(),
    async (request: Request, response: Response) => {
        try {
            const country = request.body
            const newCountry = await CountryService.createCountry(country)
            return response.status(201).json(newCountry)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })

// rota para atualizar um  pais
CountryRouter.put('/:id', body("country").isString(),
    async (request: Request, response: Response) => {
        try {
            const country = request.body
            const id = parseInt(request.params.id)   // ID vem da ROTA
            const updateCountry = await CountryService.updateCountry(country, id)
            return response.status(201).json(updateCountry)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    })

// rota para deletar um  pais
CountryRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const country = await CountryService.deleteCountryById(id)
        if (country)
            return response.status(200).json(`Pais deletado com sucesso!`)
        else
            return response.status(404).json("Pais não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})