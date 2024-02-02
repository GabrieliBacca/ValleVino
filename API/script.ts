//iniciar com o prisma
import { PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

const prisma = new PrismaClient()

// criar os DTO de acordo com o Schema do Prisma
type UserDTO = {
    name: string,
    email: string,
    password: string,
    address: string,
    birthday: Date,
    gender: string,
    telephone: number,
}

type ReviewDTO = {
    review: string,
    createdAt: Date,
    updatedAt: Date,

}

type ShoppingDTO = {
    shopping: string,

}

type TypeDTO = {
    type: string,
}

type CountryDTO = {
    country: string,
}

type GrapeDTO = {
    grape: string,
}

type HarmonyDTO = {
    harmony: string,
}

type WineDTO = {
    label: string,
    price: number,
    quantity: number,
    year: number,
    wineType: TypeDTO,
    wineCountry: CountryDTO,
    wineGrape: GrapeDTO,
    wineHarmony: HarmonyDTO,
    wineReview: ReviewDTO,
}

type wineHarmony = {
    wineid: number,
    harmonyid: number
}


//Criar um novo User
async function AddNewUser($userDTO: UserDTO) {
    const user = await prisma.user.create({
        data: $userDTO
    })
    console.log(user)
}

//Criar um novo Usuario
let user1: UserDTO = {
    name: 'Rodrigo Ulir Braz',
    email: 'rulir@hotmail.com',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 47988035265,
}

let user2: UserDTO = {
    name: 'Rodrigo Joel',
    email: 'devrodrigobnu@gmail.com',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1990, 11, 26), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 47996740173,
}

let user3: UserDTO = {
    name: 'Gabrieli Bacca',
    email: ' ',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0  
    gender: 'Feminino',
    telephone:  ,
}

let user4: UserDTO = {
    name: 'Bruno',
    email: ' ',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone:  ,
}

//rodar a funcao pra criar os 4 usuarios
AddNewUser(user1)
AddNewUser(user2)
AddNewUser(user3)
AddNewUser(user4)


// funcao para mostrar todos os Usuários... GET
async function getAllUsers() {
    const users = await prisma.user.findMany()
    console.log(users)
}
//rodar a função
getAllUsers()

// funcao para buscar o Usuário pelo ID
async function getUserId(id: number) {
    const userId = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if (userId == null) {
        console.log('Usuário não encontrado')
    } else {
        console.log(userId)
    }
}


// para retornar o Usuário do id 1, que existe

getUserId(1)

// para retornar o Autor do id 2, que não existe

getUserId(2)



// Deletar usuario por ID
async function deleteUser(id: number) {
    const user = await prisma.user.delete({
        where: {
            id: id
        }
    })
    if (user == null) {
        console.log('Usuário não encontrado')
    } else {
        console.log('Usuário deletado com sucesso')
    }
}

async function updateUser(id: number, userDTO: UserDTO) {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: userDTO
    })
    if (user == null) {
        console.log('Usuário não encontrado')
    } else {
        console.log('Usuário atualizado com sucesso: ' + (user))
    }

}

//agora para o Review
async function addNewReview($review: ReviewDTO, $userID: number, $wineID: number) {
    const review = await prisma.review.create({
        data: {
            review: $review.review,
            createdAt: $review.createdAt,
            updatedAt: $review.updatedAt,

            user: {
                connect: {
                    id: $userID,
                    id: $wineID
                }
            }
        }
    })
    console.log(review)
}

// Criar o livro...

// let livro1 = {
//     title: 'Senhor dos Colares',
//     isFiction: true,
//     datePublished: new Date(),
// }


// Para criar o Livro....

// addNewBook(livro1, 1)














async function addNewBook($book: AddBookDTO, $authorID: number) {
    const book = await prisma.book.create({
        data: {
            title: $book.title,
            isFiction: $book.isFiction,
            datePublished: $book.datePublished,
            author: {
                connect: {
                    id: $authorID
                }
            }
        }
    })
    console.log(book)
}


// Criar o livro...

// let livro1 = {
//     title: 'Senhor dos Colares',
//     isFiction: true,
//     datePublished: new Date(),
// }


// Para criar o Livro....

// addNewBook(livro1, 1)


async function getBookID(id: number) {
    const BookID = await prisma.book.findUnique({
        where: {
            id: id
        },
        include: {
            author: {}
        }
    })
    if (BookID == null) {
        console.log('Livro não encontrado')
    } else {
        console.log(BookID)
    }
}

getBookID(2)





async function main() {
    // ... you will write your Prisma Client queries here
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })