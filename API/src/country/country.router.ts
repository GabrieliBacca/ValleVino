import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as CountryService from "./country.service"
import { request } from "http"

export const CountryRouter = express.Router()


//ARRUMAR PRA BAIXO
//GET: lista com todos os autores                    o ASYNC é para não criar lista de "espera" e de forma asyncrona o servidor vai responder todas sem ficar em fila....
CountryRouter.get("/", async (request: Request, response: Response) => {
    try {

        const country = await CountryService.getCountrys();
        return response.status(200).json(country)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota com variável, o nome apoós os : é o nome da variável
authorRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const author = await AuthorService.getAuthorsById(id)
        if (author)
            return response.status(200).json(author)
        else
            return response.status(404).json("Autor não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})

authorRouter.post('/', body("firsName").isString(), body("lastName").isString(),
    async (request: Request, response: Response) => {
        try {
            const author = request.body
            const newAuthor = await AuthorService.createAuthor(author)
            return response.status(201).json(newAuthor)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })



authorRouter.put('/:id', body("firsName").isString(), body("lastName").isString(),
    async (request: Request, response: Response) => {
        try {
            const author = request.body
            const id = parseInt(request.params.id)   // ID vem da ROTA
            const updateAuthor = await AuthorService.updateAuthor(author, id)
            return response.status(201).json(updateAuthor)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })

authorRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const author = await AuthorService.deleteAuthorById(id)
        if (author)
            return response.status(200).json(`Autor deletado com sucesso!`)
        else
            return response.status(404).json("Autor não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})