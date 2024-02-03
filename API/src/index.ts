import * as dotenv from "dotenv";  //sistema para configuracao de ambientes ......  o arquivo .env, salva dados que nao ficam públicos do ambiente....
import express from "express";
import cors from "cors"; //serve para abrir as portas para as conexções
import { CountryRouter } from "./country/country.router";
import { GrapeRouter } from "./grape/grape.router";
//fazer o import de todas as rotas

dotenv.config();

// para garantir que vai conectar na porta 8000 (esta no .env), porque se entrar em outra porta ele irá fechar a aplicação
if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/country", CountryRouter)
app.use("/api/grape", GrapeRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

