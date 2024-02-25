import * as dotenv from "dotenv";  //sistema para configuracao de ambientes ......  o arquivo .env, salva dados que nao ficam públicos do ambiente....
import express from "express";
import cors from "cors"; //serve para abrir as portas para as conexções
import { CountryRouter } from "./country/country.router";
import { GrapeRouter } from "./grape/grape.router";
import { HarmonyRouter } from "./harmony/harmony.router";
import { TypeRouter } from "./type/type.router";
import { UserRouter } from "./user/user.router";
import { ShoppingRouter } from "./shopping/shopping.router";
import { ReviewRouter } from "./review/review.router";
import { WineRouter } from "./wine/wine.router";
import nodemailer from 'nodemailer';
import { User } from './user/user.service';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



// Exemplo de rota no backend para buscar o ID do usuário por email


const transporter = nodemailer.createTransport({
    host: "smtp.terra.com.br",
    port: 587,
    // secure: true,
    auth: {
        user: "ulirbraz@terra.com.br",
        pass: "t4ng4"
    },
    requireTLS: true

});

//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "rulir@hotmail.com",
//         pass: ""
//     }
// });

//     service: 'Gmail',
//     auth: {
//         user: 'rulirbr@gmail.com',
//         pass: 'vakbrepbbgagnff_',
//     },
// });

const enviarEmail = async (destinatario: string, assunto: string, corpo: string) => {
    try {
        // Enviar o email
        await transporter.sendMail({
            from: 'ulirbraz@terra.com.br',
            to: destinatario,
            subject: assunto,
            text: corpo,
        });
        console.log('Email enviado com sucesso');
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
    }
};

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

// Pegar o ID do usuário pelo email
app.get('/buscar-id-usuario-por-email', async (req, res) => {
    const { email } = req.query;
    // Ensure that the email is not undefined
    if (email) {
        // Logic to search for the user ID in the database based on the email
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (user) {
            res.json({ userId: user.id });
        } else {
            res.json({ userId: null });
        }
    } else {
        res.status(400).json({ error: "Email parameter is missing or invalid" });
    }
});

// Rota para verificar se o email está cadastrado
app.get('/api/user', async (req, res) => {
    const email = req.query.email;
    if (!email) {
        return res.status(400).send('O parâmetro email é obrigatório');
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('Email não cadastrado');
    }
});



app.post('/enviar-email', async (req, res) => {
    const { destinatario, assunto, corpo } = req.body;
    try {
        await enviarEmail(destinatario, assunto, corpo);
        res.status(200).send('Email enviado com sucesso');
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
        res.status(500).send('Erro ao enviar o email');
    }
});

app.use("/api/country", CountryRouter)
app.use("/api/grape", GrapeRouter)
app.use("/api/harmony", HarmonyRouter)
app.use("/api/type", TypeRouter)
app.use("/api/user", UserRouter)
app.use("/api/shopping", ShoppingRouter)
app.use("/api/review", ReviewRouter)
app.use("/api/wines", WineRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

