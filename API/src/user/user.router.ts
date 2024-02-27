import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"   // serve para uma camada de segurança para validar as requisições .... uso opcional

import * as UserService from "./user.service"
import { request } from "http"

export const UserRouter = express.Router()


// para criar uma rota sem variável
UserRouter.get("/", async (request: Request, response: Response) => {
    try {

        const user = await UserService.getUsers();
        return response.status(200).json(user)

    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
UserRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const user = await UserService.getUserById(id)
        if (user)
            return response.status(200).json(user)
        else
            return response.status(404).json("Usuário não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})

// rota para criar um novo user
UserRouter.post('/', body("name").isString(), body("email").isString(), body("password").isString(), body("address").isString(), body("birthday").isDate(), body("gender").isString(), body("telephone").isString(), body("img").isString(),


    async (request: Request, response: Response) => {
        try {
            const user = request.body
            const Newuser = await UserService.createUser(user)
            return response.status(201).json(Newuser)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)

        }

    })

// rota para atualizar um user
UserRouter.put('/:id', body("name").isString(), body("email").isString(), body("password").isString(), body("address").isString(), body("birthday").isDate(), body("gender").isString(), body("telephone").isString(),
    async (request: Request, response: Response) => {
        try {
            const user = request.body
            const id = parseInt(request.params.id)   // ID vem da ROTA
            const updateUser = await UserService.updateUser(user, id)
            return response.status(201).json(updateUser)
        }
        catch (erro: any) {
            return response.status(500).json(erro.message)
        }
    })

// rota para deletar um user
UserRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id)                       //precisa do parseint para passar o valor de STRING do ID para INTEIRO
    try {
        const user = await UserService.deleteUserById(id)
        if (user)
            return response.status(200).json(`Usuario deletado com sucesso!`)
        else
            return response.status(404).json("Usuario não encontrado")
    }
    catch (erro: any) {
        return response.status(500).json(erro.message)
    }
})