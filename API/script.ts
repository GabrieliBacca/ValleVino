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
    createdAt: Date,
    updatedAt: Date,

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
    telephone: 5547988035265,
}

let user2: UserDTO = {
    name: 'Rodrigo Joel',
    email: 'devrodrigobnu@gmail.com',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1990, 11, 26), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 5547996740173,
}

let user3: UserDTO = {
    name: 'Gabrieli Bacca',
    email: 'baccagabrieli@gmail.com',
    password: '1234',
    address: 'Rua Bonifácio Carlos Deschamps, 120',
    birthday: new Date(2005, 2, 16), //ano, mes, dia e janeiro = 0  
    gender: 'Feminino',
    telephone: 5547984196733,
}

let user4: UserDTO = {
    name: 'Bruno Amaral',
    email: 'brunexcorp@gmail.com',
    password: '1234',
    address: 'Estrada das Videiras S/N, km 88',
    birthday: new Date(1981, 0, 30), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 5547992421400,
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

// Rodar a função para update o user 1 e alterar o nome  ***verificar se alterou só o nome...ARRUMAR
updateUser(1, {
    name: 'Rodrigo Ulir',
    email: '',
    password: '',
    address: '',
    birthday: new Date(),
    gender: '',
    telephone: 0
});


//agora para o Review
async function addNewReview($review: ReviewDTO, $userID: number, $wineID: number) {
    const review = await prisma.review.create({
        data: {
            review: $review.review,
            createdAt: $review.createdAt,
            updatedAt: $review.updatedAt,

            user: {
                connect: {
                    id: $userID & $wineID         //CONFERIR SE ESTÁ FUNCIONANDO
                }
            }
        }
    })
    console.log(review)
}

// Criar o review...

let review1 = {
    review: 'Bom vinho, com notas elegante',
    createdAt: new Date(),
    updatedAt: new Date(),
}

// Para rodar  a funcao do Review, feito pelo user de id 1 e para o wine 1
addNewReview(review1, 1, 1)

//função para mostrar todos os Reviews
async function getAllReviews() {
    const reviews = await prisma.review.findMany()
    console.log(reviews)
}

// Rodar a função para mostrar todos os Reviews
getAllReviews()


// função de pegar o Review pelo Id
async function getReviewId(id: number) {
    const ReviewId = await prisma.review.findUnique({
        where: {
            id: id
        },
        include: {
            user: {},
            Wine: {}
        }
    })
    if (ReviewId == null) {
        console.log('Review não encontrado')
    } else {
        console.log(ReviewId)
    }
}

// Rodar a função para mostrar o Review do id 1
getReviewId(1)


// Deletar Review por ID
async function deleteReview(id: number) {
    const review = await prisma.review.delete({
        where: {
            id: id
        }
    })
    if (review == null) {
        console.log('Review não encontrado')
    } else {
        console.log('Review deletado com sucesso')
    }
}

// Rodar função para deletar o Review do id 1
deleteReview(1)

// Função de Atualizar o Review

async function updateReview(id: number, reviewDTO: ReviewDTO) {
    const review = await prisma.review.update({
        where: {
            id: id
        },
        data: reviewDTO
    })
    if (review == null) {
        console.log('Review não encontrado')
    } else {
        console.log('Review atualizado com sucesso: ' + (review))
    }
}

// Rodar a função para update o Review do id 1, VERIFICAR ****

updateReview(1, {
    review: 'Bom vinho, com nota elegante',
    createdAt: new Date(),
    updatedAt: new Date(),
})


// Funções para Shopping / compras historico  

async function addNewShopping($shopping: ShoppingDTO, $userID: number) {
    const shopping = await prisma.shopping.create({
        data: {
            shopping: $shopping.shopping,
            createdAt: $shopping.createdAt,
            updatedAt: $shopping.updatedAt,

            user: {
                connect: {
                    id: $userID,

                }
            }
        }
    })
    console.log(shopping)
}

// Criar a compra...

let shopping1 = {
    shopping: '3 vinhos modelo, preço total de R$ 300,00',
    createdAt: new Date(),
    updatedAt: new Date(),
}

// Para rodar  a funcao do Compra, feito pelo user de id 1  
addNewShopping(shopping1, 1)

//função para mostrar todos as Compras
async function getAllShoppings() {
    const shoppings = await prisma.shopping.findMany()
    console.log(shoppings)
}

// Rodar a função para mostrar todos as Compras
getAllShoppings()


// função de pegar a Compra pelo Id
async function getShoppingId(id: number) {
    const ShoppingId = await prisma.shopping.findUnique({
        where: {
            id: id
        },
        include: {
            user: {},
            Wine: {}
        }
    })
    if (ShoppingId == null) {
        console.log('Review não encontrado')
    } else {
        console.log(ShoppingId)
    }
}

// Rodar a função para mostrar o Compra do id 1
getShoppingId(1)


// Deletar Compra por ID
async function deleteShopping(id: number) {
    const shopping = await prisma.shopping.delete({
        where: {
            id: id
        }
    })
    if (shopping == null) {
        console.log('Compra não encontrada')
    } else {
        console.log('Compra deletada com sucesso')
    }
}

// Rodar função para deletar o Compra do id 1
deleteShopping(1)

// Função de Atualizar o Compra

async function updateShopping(id: number, shoppingDTO: ShoppingDTO) {
    const shopping = await prisma.shopping.update({
        where: {
            id: id
        },
        data: shoppingDTO
    })
    if (shopping == null) {
        console.log('Compra não encontrada')
    } else {
        console.log('Compra atualizada com sucesso: ' + (shopping))
    }
}

// Rodar a função para update a Compra do id 1, VERIFICAR ****

updateShopping(1, {
    shopping: 'Comprou 2 vinhos, preco total de R$ 600,00',
    createdAt: new Date(),
    updatedAt: new Date(),
})

// Funções Type / tipo de vinho  

async function addNewType($type: TypeDTO) {
    const type = await prisma.type.create({
        data: {
            type: $type.type,
        }
    })
    console.log(type)
}

// Criar o tipo...

let type1 = {
    type: 'Espumante',
}

let type2 = {
    type: 'Champagne',
}

let type3 = {
    type: 'Tinto',
}


// Para rodar  a funcao do tipo de uva.
addNewType(type1)
addNewType(type2)
addNewType(type3)



//função para mostrar todos os tipos de vinhos
async function getAllTypes() {
    const types = await prisma.type.findMany()
    console.log(types)
}

// Rodar a função para mostrar todos os tipos de vinhos
getAllTypes()


// função de pegar o Type pelo Id
async function getTypeId(id: number) {
    const TypeId = await prisma.type.findUnique({
        where: {
            id: id
        },

    })
    if (TypeId == null) {
        console.log('Tipo de vinho não encontrado')
    } else {
        console.log(TypeId)
    }
}

// Rodar a função para mostrar o tipo do vinho do id 1
getTypeId(1)


// Deletar Type  por ID
async function deleteType(id: number) {
    const type = await prisma.type.delete({
        where: {
            id: id
        }
    })
    if (type == null) {
        console.log('Tipo de vinho não encontrado')
    } else {
        console.log('Tipo de vinho deletado com sucesso')
    }
}

// Rodar função para deletar o Compra do id 1
deleteType(1)

// Função de Atualizar o tipo de uva pelo id

async function updateType(id: number, typeDTO: TypeDTO) {
    const type = await prisma.type.update({
        where: {
            id: id
        },
        data: typeDTO
    })
    if (type == null) {
        console.log('Tipo de vinho não encontrado')
    } else {
        console.log('Tipo de vinho atualizado com sucesso: ' + (type))
    }
}

// Rodar a função para update a Type do id 1, VERIFICAR ****

updateType(1, {
    type: 'Espumante 2.0',
})

// FALTA FAZER AS FUNÇOES DE  Country, Grape, Harmony e Wine  (WineHarmony)


async function main() {
    console.log('Hello world')
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