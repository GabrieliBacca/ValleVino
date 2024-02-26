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

import * as nodemailer from 'nodemailer';

import { User } from './user/user.service';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



// Exemplo de rota no backend para buscar o ID do usuário por email

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: 'rulirbr@gmail.com',
//         clientId: '283478974268-9dnev6in2qc1dbr31uok4tntcf5ke2t0.apps.googleusercontent.com',
//         clientSecret: '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',
//         refreshToken: '1 //04N_3LbDgldwmCgYIARAAGAQSNwF-L9IrXZOml2kiAIB1KIwwEKNdALHG49SvvSPFCWWv0tDwuxVqBb5u0D72PxBzsfHF1t6hyNo',
//         // accessToken: 'ya29.a0AfB_byACpqMGWtcbbK4i4ZBzsaZDl9TnPEYycF9j9u_7bVFrOu7gKIlzGP_nKbMojvvYBIXCUItrk7lW6ibhanDt_37JudScQ28WvFrhzQ8vLVqmYiVbEVi9wbU-0DsB t8mumu1nPmk7i2FqqQKNGOanU9YmK5PbfggIaCgYKAaYSARMSFQHGX2MiPBzcoUSp2Gt_THZ9Y0RaFQ0171', // optional, leave this out for nodemailer to generate the token
//     },
// });

// let mailOptions = {
//     from: 'rulirbr@gmail.com', // sender address
//     to: 'rulir@hotmail.com', // list of receivers
//     subject: 'Nodemailer Project', // Subject line
//     text: 'Hi from your nodemailer project' // plain text body
// };

// transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//         console.log("Error: " + err);
//     } else {
//         console.log("Email sent successfully: " + info.response);
//     }
// });


// // terra funcionando
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

const enviarEmail = async (destinatario: string, assunto: string, corpo: string) => {
    try {
        // Enviar o email
        await transporter.sendMail({
            from: 'rulirbr@gmail.com',
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
    // verificar se o email está preenchido
    if (email) {
        // Localizar o usuário pelo email
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
        res.status(400).json({ error: "Email não informado ou inválido" });
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
app.use("/api/users", UserRouter)
app.use("/api/shopping", ShoppingRouter)
app.use("/api/review", ReviewRouter)
app.use("/api/wines", WineRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

