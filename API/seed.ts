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
    telephone: string,
    isAdm: boolean,
    img: string,
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
    vinicula: string,
    alchoolic: number,
    description: string,
    img: string,
    type: number,
    country: number,
    grape: number,
    harmony: number,
    review: number,
}

// type wineHarmony = {
//     wineid: number,
//     harmonyid: number
// }


//Criar um novo User
// async function AddNewUser($userDTO: UserDTO) {
//     const user = await prisma.user.create({
//         data: $userDTO
//     })
//     console.log(user)
//     return user
// }

// //Criar um novo Usuario
// let user1: UserDTO = {
//     name: 'Rodrigo Ulir Brazz',
//     email: 'rulir@hotmail.com',
//     password: 'vinho123',
//     address: 'Rua dos vinhos, 123',
//     birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0
//     gender: 'Masculino',
//     telephone: '5547988035265',
//     isAdm: true,
//     img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
// }

// let user2: UserDTO = {
//     name: 'Rodrigo Joel',
//     email: 'devrodrigobnu@gmail.com',
//     password: 'vinho123',
//     address: 'Rua dos vinhos, 123',
//     birthday: new Date(1990, 11, 26), //ano, mes, dia e janeiro = 0
//     gender: 'Masculino',
//     telephone: '5547996740173',
//     isAdm: true,
//     img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
// }

// let user3: UserDTO = {
//     name: 'Gabrieli Bacca',
//     email: 'baccagabrieli@gmail.com',
//     password: '1234',
//     address: 'Rua Bonifácio Carlos Deschamps, 120',
//     birthday: new Date(2005, 2, 16), //ano, mes, dia e janeiro = 0
//     gender: 'Feminino',
//     telephone: '5547984196733',
//     isAdm: true,
//     img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
// }

// let user4: UserDTO = {
//     name: 'Bruno Amaral',
//     email: 'brunexcorp@gmail.com',
//     password: '1234',
//     address: 'Estrada das Videiras S/N, km 88',
//     birthday: new Date(1981, 0, 30), //ano, mes, dia e janeiro = 0
//     gender: 'Masculino',
//     telephone: '5547992421400',
//     isAdm: true,
//     img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
// }

// //rodar a funcao pra criar os 4 usuarios
// async function createUsers() {
//     // await AddNewUser(user1);
//     await AddNewUser(user2);
//     await AddNewUser(user3);
//     await AddNewUser(user4);
// }

// createUsers();


// // funcao para mostrar todos os Usuários... GET
// async function getAllUsers() {
//     const users = await prisma.user.findMany()
//     console.log(users)
// }
// //rodar a função
// // getAllUsers()

// // // funcao para buscar o Usuário pelo ID
// async function getUserId(id: number) {
//     const userId = await prisma.user.findUnique({
//         where: {
//             id: id
//         }
//     })
//     if (userId == null) {
//         console.log('Usuário não encontrado')
//     } else {
//         console.log(userId)
//     }
// }


// // para retornar o Usuário do id 1, que existe

// // getUserId(1)

// // para retornar o Usuário do id 5, que não existe

// getUserId(5)


// // Funcao para atualizar o Usuário
// async function updateUser(id: number, userDTO: UserDTO) {
//     const user = await prisma.user.update({
//         where: {
//             id: id
//         },
//         data: userDTO
//     })
//     if (user == null) {
//         console.log('Usuário não encontrado')
//     } else {
//         console.log('Usuário atualizado com sucesso: ' + (user))
//     }
// }

// // Rodar a função para update o user 1 e alterar o nome  ***verificar se alterou só o nome...ARRUMAR
// // updateUser(1, {
// //     name: 'Rodrigo Ulir Braz',
// //     email: 'rulir@hotmail.com',
// //     password: 'vinho123',
// //     address: 'Rua dos vinhos, 123',
// //     birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0
// //     gender: 'Masculino',
// //     telephone: 5547988035265,
// // });


// getAllUsers()
// // // Deletar usuario por ID
// async function deleteUser(id: number) {
//     const user = await prisma.user.delete({
//         where: {
//             id: id
//         }
//     })
//     if (user == null) {
//         console.log('Usuário não encontrado')
//     } else {
//         console.log('Usuário deletado com sucesso')
//     }
// }
// //Rodar a função para deletar o user 1
// // deleteUser(1)

// //agora para o Review
// async function addNewReview($review: ReviewDTO, $userID: number, $wineID: number) {
//     const review = await prisma.review.create({
//         data: {
//             review: $review.review,
//             createdAt: $review.createdAt,
//             updatedAt: $review.updatedAt,

//             user: {
//                 connect: {
//                     id: $userID | $wineID         //ARRUMAR aqui o ID do wine e do user
//                 }
//             }
//         }
//     })
//     console.log(review)
// }

// // Criar o review...

// let review1 = {
//     review: 'Bom vinho, com notas difenciadas',
//     createdAt: new Date(),
//     updatedAt: new Date(),
// }

// let review2 = {
//     review: 'Bom vinho, com notas elegante',
//     createdAt: new Date(),
//     updatedAt: new Date(),
// }

// // // Para rodar  a funcao do Review, feito pelo user de id 2 e para o wine 1
// async function createReview() {

//     await addNewReview(review1, 1, 1)
//     await addNewReview(review2, 2, 2)
// }
// createReview()


// //função para mostrar todos os Reviews
// async function getAllReviews() {
//     const reviews = await prisma.review.findMany()
//     console.log(reviews)
// }

// // Rodar a função para mostrar todos os Reviews
// // getAllReviews()


// // função de pegar o Review pelo Id
// async function getReviewId(id: number) {
//     const ReviewId = await prisma.review.findUnique({
//         where: {
//             id: id
//         },
//         include: {
//             user: {},
//             Wine: {}
//         }
//     })
//     if (ReviewId == null) {
//         console.log('Review não encontrado')
//     } else {
//         console.log(ReviewId)
//     }
// }

// // // Rodar a função para mostrar o Review do id 1
// // getReviewId(1)

// // // Função de Atualizar o Review

// async function updateReview(id: number, reviewDTO: ReviewDTO) {
//     const review = await prisma.review.update({
//         where: {
//             id: id
//         },
//         data: reviewDTO
//     })
//     if (review == null) {
//         console.log('Review não encontrado')
//     } else {
//         console.log('Review atualizado com sucesso: ' + (review))
//     }
// }

// // // Rodar a função para update o Review do id 1, VERIFICAR ****

// // updateReview(1, {
// //     review: 'Bom vinho, com nota elegante',
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// // })

// // Deletar Review por ID
// async function deleteReview(id: number) {
//     const review = await prisma.review.delete({
//         where: {
//             id: id
//         }
//     })
//     if (review == null) {
//         console.log('Review não encontrado')
//     } else {
//         console.log('Review deletado com sucesso')
//     }
// }

// // // Rodar função para deletar o Review do id 1
// // deleteReview(1)


// // // Funções para Shopping / compras historico

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

// // Criar a compra...

let shopping1 = {
    shopping: '3 vinhos modelo, preço total de R$ 300,00',
    createdAt: new Date(),
    updatedAt: new Date(),
}

let shopping2 = {
    shopping: '3 vinhos modelo, preço total de R$ 600,00',
    createdAt: new Date(),
    updatedAt: new Date(),
}



// Para rodar  a funcao do Compra, feito pelo user de id 1
// addNewShopping(shopping2, 2)

// //função para mostrar todos as Compras
// async function getAllShoppings() {
//     const shoppings = await prisma.shopping.findMany()
//     console.log(shoppings)
// }

// // Rodar a função para mostrar todos as Compras
// getAllShoppings()


// // função de pegar a Compra pelo Id
// async function getShoppingId(id: number) {
//     const ShoppingId = await prisma.shopping.findUnique({
//         where: {
//             id: id
//         },
//         include: {
//             user: {},
//             Wine: {}
//         }
//     })
//     if (ShoppingId == null) {
//         console.log('Review não encontrado')
//     } else {
//         console.log(ShoppingId)
//     }
// }

// // Rodar a função para mostrar o Compra do id 1
// getShoppingId(1)

// // // Função de Atualizar a Compra

// async function updateShopping(id: number, shoppingDTO: ShoppingDTO) {
//     const shopping = await prisma.shopping.update({
//         where: {
//             id: id
//         },
//         data: shoppingDTO
//     })
//     if (shopping == null) {
//         console.log('Compra não encontrada')
//     } else {
//         console.log('Compra atualizada com sucesso: ' + (shopping))
//     }
// }

// // // Rodar a função para update a Compra do id 1, VERIFICAR ****

// // updateShopping(1, {
// //     shopping: 'Comprou 2 vinhos, preco total de R$ 600,00',
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// // })



// // // Deletar Compra por ID
// async function deleteShopping(id: number) {
//     const shopping = await prisma.shopping.delete({
//         where: {
//             id: id
//         }
//     })
//     if (shopping == null) {
//         console.log('Compra não encontrada')
//     } else {
//         console.log('Compra deletada com sucesso')
//     }
// }

// // // Rodar função para deletar o Compra do id 1
// // deleteShopping(1)

// getAllShoppings()

// // Funções Type / tipo de vinho

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
    type: 'Espumante2',
}

let type2 = {
    type: 'Champagne',
}

let type3 = {
    type: 'Tinto',
}

let type4 = {
    type: 'Branco',
}


// Para rodar  a funcao do tipo de uva.
async function AddnewsType() {
    await addNewType(type1);
    await addNewType(type2);
    await addNewType(type3);
    await addNewType(type4);
}
// AddnewsType();


// //função para mostrar todos os tipos de vinhos
// async function getAllTypes() {
//     const types = await prisma.type.findMany()
//     console.log(types)
// }

// // Rodar a função para mostrar todos os tipos de vinhos
// getAllTypes()


// // função de pegar o Type pelo Id
// async function getTypeId(id: number) {
//     const TypeId = await prisma.type.findUnique({
//         where: {
//             id: id
//         },

//     })
//     if (TypeId == null) {
//         console.log('Tipo de vinho não encontrado')
//     } else {
//         console.log(TypeId)
//     }
// }

// // // Rodar a função para mostrar o tipo do vinho do id 1
// getTypeId(1)

// // // Função de Atualizar o tipo de uva pelo id

// async function updateType(id: number, typeDTO: TypeDTO) {
//     const type = await prisma.type.update({
//         where: {
//             id: id
//         },
//         data: typeDTO
//     })
//     if (type == null) {
//         console.log('Tipo de vinho não encontrado')
//     } else {
//         console.log('Tipo de vinho atualizado com sucesso: ' + (type))
//     }
// }

// // Rodar a função para update a Type do id 1, VERIFICAR ****

// // updateType(1, {
// //     type: 'Espumante',
// // })

// // updateType(3, {
// //     type: 'Champagne',
// // })

// // // Deletar Type  por ID
// async function deleteType(id: number) {
//     const type = await prisma.type.delete({
//         where: {
//             id: id
//         }
//     })
//     if (type == null) {
//         console.log('Tipo de vinho não encontrado')
//     } else {
//         console.log('Tipo de vinho deletado com sucesso')
//     }
// }

// // // Rodar função para deletar o Type do id 1
// // // deleteType(6)


// // // Funções Country / país

async function addNewCountry($country: CountryDTO) {
    const country = await prisma.country.create({
        data: {
            country: $country.country,
        }
    })
    console.log(country)
}

// Criar os paises...

let country1 = {
    country: 'Espanha',
}

let country2 = {
    country: 'França',
}

let country3 = {
    country: 'Argentina',
}

let country4 = {
    country: 'Italia',
}

let country5 = {
    country: 'Portugal',
}

let country6 = {
    country: 'Uruguai',
}


// Para rodar  a funcao dos paises.
async function AddnewsCountry() {
    await addNewCountry(country1)
    await addNewCountry(country2)
    await addNewCountry(country3)
    await addNewCountry(country4)
    await addNewCountry(country5)
    await addNewCountry(country6)

}
// AddnewsCountry();

// //função para mostrar todos os paises cadastrados
// async function getAllCountries() {
//     const countrys = await prisma.country.findMany()
//     console.log(countrys)
// }

// // Rodar a função para mostrar todos Country
// getAllCountries()


// // função de pegar o Country pelo Id
// async function getCountryId(id: number) {
//     const CountryId = await prisma.country.findUnique({
//         where: {
//             id: id
//         },

//     })
//     if (CountryId == null) {
//         console.log('País não encontrado')
//     } else {
//         console.log(CountryId)
//     }
// }

// // Rodar a função para mostrar o Country do id 1
// getCountryId(1)

// // Função de Atualizar o Country pelo id

// async function updateCountry(id: number, countryDTO: CountryDTO) {
//     const country = await prisma.country.update({
//         where: {
//             id: id
//         },
//         data: countryDTO
//     })
//     if (country == null) {
//         console.log('País não encontrado')
//     } else {
//         console.log('País atualizado com sucesso: ' + (country))
//     }
// }

// // // Rodar a função para update do Country do id 1, VERIFICAR ****

// // updateCountry(2, {
// //     country: 'Espanha',
// // })

// // Deletar Country  por ID
// async function deleteCountry(id: number) {
//     const country = await prisma.country.delete({
//         where: {
//             id: id
//         }
//     })
//     if (country == null) {
//         console.log('País não encontrado')
//     } else {
//         console.log('País deletado com sucesso')
//     }
// }

// // Rodar função para deletar o Country do id 1
// // deleteCountry(11)

// Funções Grape / uva

async function addNewGrape(grape: GrapeDTO) {
    const Newgrape = await prisma.grape.create({
        data: {
            grape: grape.grape,
        }
    })
    console.log(Newgrape)
}



// Criar as uvas...

let grape1 = {
    grape: 'Trepat e Grenache',
}

let grape2 = {
    grape: 'Macabeo',
}

let grape3 = {
    grape: 'Pinot Noir',
}

let grape4 = {
    grape: 'Cabernet Franc',
}

let grape5 = {
    grape: 'Cabernet Malbec ',
}

let grape6 = {
    grape: 'Sangiovese',
}

let grape7 = {
    grape: ' Corvina, Rondinella, Croatina, Corvinone',
}

let grape8 = {
    grape: 'Alicante Bouschet, Touriga Nacional, Aragonez, Syrah, Trincadeira, Cabernet Sauvignon e Touriga',
}

let grape9 = {
    grape: ' Alicante Bouschet (65%), Aragonez (20%) e Touriga Nacional (15%)',
}

let grape10 = {
    grape: 'Tannat',
}

let grape11 = {
    grape: 'Marselan',
}


// Para rodar  a funcao cadastrar das uvas.
async function AddnewsGrape() {
    await addNewGrape(grape1);
    await addNewGrape(grape2);
    await addNewGrape(grape3);
    await addNewGrape(grape4);
    await addNewGrape(grape5);
    await addNewGrape(grape6);
    await addNewGrape(grape7);
    await addNewGrape(grape8);
    await addNewGrape(grape9);
    await addNewGrape(grape10);
    await addNewGrape(grape11);
}
// AddnewsGrape();

// //função para mostrar todos as uvas cadastrados
// async function getAllGrapes() {
//     const grapes = await prisma.grape.findMany()
//     console.log(grapes)
// }

// // Rodar a função para mostrar todas as uvas
// getAllGrapes()


// // função de pegar a Uva pelo Id
// async function getGrapeId(id: number) {
//     const GrapeId = await prisma.grape.findUnique({
//         where: {
//             id: id
//         },

//     })
//     if (GrapeId == null) {
//         console.log('Uva não encontrado')
//     } else {
//         console.log(GrapeId)
//     }
// }

// // Rodar a função para mostrar a uva do id 1
// getGrapeId(1)

// // Função de Atualizar o Uva pelo id

// async function updateGrape(id: number, grapeDTO: GrapeDTO) {
//     const grape = await prisma.grape.update({
//         where: {
//             id: id
//         },
//         data: grapeDTO
//     })
//     if (grape == null) {
//         console.log('Uva não encontrada')
//     } else {
//         console.log('Uva atualizada com sucesso: ' + (grape))
//     }
// }

// // Rodar a função para update da Uva do id 1, VERIFICAR ****

// // updateGrape(7, {
// //     grape: 'Trepat e Grenache',
// // })


// // Deletar Uva  por ID
// async function deleteGrape(id: number) {
//     const grape = await prisma.grape.delete({
//         where: {
//             id: id
//         }
//     })
//     if (grape == null) {
//         console.log('Uva não encontrado')
//     } else {
//         console.log('Uva deletada com sucesso')
//     }
// }

// // Rodar função para deletar a Uva do id 1
// // deleteGrape(19)



// Funções Harmony / harmonizacao

async function addNewHarmony($harmony: HarmonyDTO) {
    const harmony = await prisma.harmony.create({
        data: {
            harmony: $harmony.harmony,
        }
    })
    console.log(harmony)
}

// Criar as harmonizaçôes, retirei do wine.com.br e vivino.com.br...

let harmony1 = {
    harmony: 'Carpaccio de salmão defumado, escalopinho de mignon, casquinha de siri, risoto de abóbora com quadradinhos de legumes, fettucine all matriciana, sashimi, puchero, cassoulet, feijoada, berinjela gratinada com ricota defumada, Grenachi.',

}

let harmony2 = {
    harmony: 'Canapés variados, risoto de presunto cru, carpaccio, peixe grelhado com purê de batatas, bolinho de bacalhau, comida japonesa.',
}

let harmony3 = {
    harmony: 'Canapés à base de peixe, frutos do mar, ceviche de peixe branco, salmão assado e queijos de massa mole, salgadinhos de festa, sanduíches e tortas salgadas.',
}

let harmony4 = {
    harmony: 'Talharim com frutos do mar, camarão empanado, sashimi de salmão, ostras grelhadas, risoto de pera com nozes, queijos e embutidos.',
}

let harmony5 = {
    harmony: 'Carnes Vermelhas, Carne Suína, Queijos.',
}

let harmony6 = {
    harmony: 'Carne vermelha e cordeiro.',
}

//lembrar calcareo é com carne vermelha e cordeiro tb, arrogante syrah tb....

let harmony7 = {
    harmony: 'Carne vermelha, cordeiro, carne de caça (cervo, veado), aves.',
}

let harmony8 = {
    harmony: 'Carne vermelha, cordeiro, massa, aves.'
} //combina com o bianchi e jean claude


let harmony9 = {
    harmony: 'Carne vermelha, cordeiro, porco, aves, cogumelos, quejo azul.',
}

let harmony10 = {
    harmony: 'Porco, peixe gordo (salmão, atum, etc), vegetariano, aves.',
}

let harmony11 = {
    harmony: 'Carne vermelha, cordeiro,porco.',
}
//fiz até o Luigi Bosca Malbec 2022

// Para rodar  a funcao cadastrar das harmonizacoes.
async function AddNewHarmonies() {
    await addNewHarmony(harmony1)
    await addNewHarmony(harmony2)
    await addNewHarmony(harmony3)
    await addNewHarmony(harmony4)
    await addNewHarmony(harmony5)
    await addNewHarmony(harmony6)
    await addNewHarmony(harmony7)
    await addNewHarmony(harmony8)
    await addNewHarmony(harmony9)
    await addNewHarmony(harmony10)
    await addNewHarmony(harmony11)
}

// AddNewHarmonies()
// //função para mostrar todos as harmonizacoes cadastradas
// async function getAllHarmonies() {
//     const harmonys = await prisma.harmony.findMany()
//     console.log(harmonys)
// }

// // Rodar a função para mostrar todas as harmonizacoes
// getAllHarmonies()


// // função de pegar a Harmonizacao pelo Id
// async function getHarmonyId(id: number) {
//     const HarmonyId = await prisma.harmony.findUnique({
//         where: {
//             id: id
//         },

//     })
//     if (HarmonyId == null) {
//         console.log('Harmonização não encontrada')
//     } else {
//         console.log(HarmonyId)
//     }
// }

// // Rodar a função para mostrar a harmonizacao do id 1
// getHarmonyId(1)

// // // Função de Atualizar a Harmonizacao pelo id

// async function updateHarmony(id: number, harmonyDTO: HarmonyDTO) {
//     const harmony = await prisma.harmony.update({
//         where: {
//             id: id
//         },
//         data: harmonyDTO
//     })
//     if (harmony == null) {
//         console.log('Harmonização não encontrada')
//     } else {
//         console.log('Harmonização atualizada com sucesso: ' + (harmony))
//     }
// }

// // // Rodar a função para update da harmonizacao do id 1, VERIFICAR ****

// // updateHarmony(10, {
// //     harmony: 'Carpaccio de salmão defumado, escalopinho de mignon, casquinha de siri, risoto de abóbora com quadradinhos de legumes, fettucine all matriciana, sashimi, puchero, cassoulet, feijoada, berinjela gratinada com ricota defumada, Grenache.',
// // })

// // Deletar Harmonizacao  por ID
// async function deleteHarmony(id: number) {
//     const harmony = await prisma.harmony.delete({
//         where: {
//             id: id
//         }
//     })
//     if (harmony == null) {
//         console.log('Harmonização não encontrada')
//     } else {
//         console.log('Harmonização deletada com sucesso')
//     }
// }

// // Rodar função para deletar a harmonizacao do id 1
// // deleteHarmony(19)


// Function addNewWine refactored with error handling
async function addNewWine(wine: WineDTO, typeId: number, countryId: number, grapeId: number, harmonyId: number, reviewId: number) {
    try {
        const newWine = await prisma.wine.create({
            data: {
                label: wine.label,
                price: wine.price,
                quantity: wine.quantity,
                year: wine.year,
                vinicula: wine.vinicula,
                alchoolic: wine.alchoolic,
                description: wine.description,
                img: wine.img,

                type: {
                    connect: {
                        id: typeId
                    }
                },
                country: {
                    connect: {
                        id: countryId
                    }
                },
                grape: {
                    connect: {
                        id: grapeId
                    }
                },
                harmony: {
                    connect: {
                        id: harmonyId
                    }
                },
                review: {
                    connect: {
                        id: reviewId
                    }
                },
            }
        });
        console.log(newWine);
    } catch (error) {
        console.error('Error adding new wine:', error);
    }
}

// Criar os vinhos usando os IDs recém-criados
let wine1 = {
    label: "Freixenet Cava Cordon Rosado Brut Rosee",
    price: 75.00,
    quantity: 9,
    year: 0,
    vinicula: "Freixenet",
    alchoolic: 12.00,
    description: "Essa cava rosé com uma coloração cereja brilhante e aromas de framboesas e amoras, notas de louro, é muito refrescante com suas borbulhas. Uma tradição na produção de espumantes através do método tradicional a Freixenet é a empresa mais conhecida na Espanha e referência no mercado internacional.",
    type: 1,
    country: 2,
    grape: 2,
    harmony: 2,
    review: 1, // Você precisa definir um ID de revisão válido
    img: "https://freixenet.vteximg.com.br/arquivos/ids/159466-500-500/192021988-1.png?v=638288270465800000"
}
let wine2 = {
    label: "Freixenet Cava Cordon Negro Brut",
    price: 75.00,
    quantity: 11,
    year: 0,
    vinicula: "Freixenet",
    alchoolic: 11.50,
    description: "Com aroma de frutas tropicais com notas cítricas, Cava Freixenet Cordón Negro Brut possui um paladar frutado, cremoso e muito fresco. Elegante e saboroso, este exemplar é elaborado pela família Sala, que há séculos faz história no mundo do vinho.",
    type: 1,
    country: 1,
    grape: 2,
    harmony: 2,
    review: 1,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABwgGBQP/xAA5EAABAwMBBAUKBAcAAAAAAAABAAIDBAURIQYHEjEyQVFxgRMiIyQ2YZGhscFScnPRCBVCdIKywv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAABMREC/9oADAMBAAIRAxEAPwC4oiICIiApDvR23v1i2jdQ22ZscQp2SMb5g4s51yTnmDp7lXln7fK+4RbaVhp61zY3U0J4eDVgAOmezOT3uKLFW3YXuu2h2MorldHMfUyOkaXtAHEGvLQSBpnRdWuC3Ih53fUj5JTI5885ORgN9IRgfDPiV3qIIiICIiAiIgIiICg28b1vbe8OGeCKJsXEP6fQg6+7Uq8rN99uT6q6XSsY4GOqqHu5c2cR4floixUNxzwdhmwggmGrmacdWSHf9KgKSbhKxzY71bnxuY0yMqouIHDg4cJx2gcLdfeq2hdEREQREQEREBERB4W3NxltWyV0q6YE1DadzYQPxu81p8Cc+CzHUeTtkDZKtvHOGEQRZz5N2mHuGcdXROeeSOWdBbzqoinoaJp0e50zv8Rgf7fJZ52wPrPijUj3dyd4lot4lMZpHPbXtfBM97skl2rSe08TWjxWoFiyxVMlHdqaohPDLHIHMPY4HI+YWzKGpZWUUFVF0J42yN7nDP3Rl90REBERAREQEREE23kvJvcTTybSAjxc79lB9rnZqvFXTeU4NvrS4geqN5/meoZtPBNLV5iikeNei0lGpjw6M4qovzBa/wBhZDLsfaHHqpWN+Ax9lkKCGWOpj443t84dJpC1zu+9i7T+gPqUZdCiIgIiICIiAiIgh/8AEMPS0/bwxY1x1yKffyS5UVK/LDUmSNzY2wGQ6kYBzw4znXnrjRUff09zK+hLRCXehA8tjg5ydLOmFwT7fcRHPOL9avLSdPyNzhJHIaa6YGmR1KVvzjmqq2XKkl46uOZsbXNy5+cZJ5AnpHu7+S1Xu99i7R+gPqVlu7UVTSugM90pqyMyDDIa5s5B7cAnHetSbvvYu0f24+pSM10KIiqCIiAiIgIiIJlvYtck1TDXS0D6ujEIa4shMvkntJ1IAOBh3P3FQq7V1THVmOgD2M/C2L7YWwkResc221X+71cUdNba2qc5w0ZTnHxxgd5Wr9kqCa17NW6hqgBPDA1sgacgO5kZ68L10RBERAREQf/Z"
}

let wine3 = {
    label: "Freixenet Cava Carta Nevada Demi Sec",
    price: 75.00,
    quantity: 9,
    year: 0,
    vinicula: "Freixenet",
    alchoolic: 11.50,
    description: "A história da Freixenet começa na pequena cidade de Sant Sadurní d'Anoia. O Cava Freixenet Carta Nevada possui aromas que nos recordam maçã fresca e notas florais. Apresenta borbulhas finas, é levemente doce e refrescante.",
    type: 1,
    country: 1,
    grape: 3,
    harmony: 3,
    review: 2,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABgcIBAUB/8QANBAAAQMDAgMECAYDAAAAAAAAAQACAwQFEQYSByExImGBoRNBUXSRsbLwFDJCU8HRCCY2/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAdEQEAAwEBAQADAAAAAAAAAAAAAQIRAzEhBBIy/9oADAMBAAIRAxEAPwCjUREBERAVhaH0BQahsj7jXXKeB5LtkcMYOADjmSq9V78KGzP0LA5jKUNE8jGmXcS524c+RHLn5LPraa12F6REz9Ute6BtsutTRMm9M2F5aJMY3D24XCve1y90mrLk94YHGXtBmcZ2jpleCr1nYiVZ9ERFKBERAREQEREBX/w5iNPw7s+ey6aoklwehHpMfwqBAJIA5n1LUdPQssmkLdQPGXU9LGx+W/q5biPHKx7TlV6es9a8jMWrro0/vZHwC8BT7jFbBS6ggrmZ2V0O89zgefzCgKvznaxKLRkyIiK6oiIgIiICIiCS8OrOb5rG3UhBMTJRNKQOjGdrzIA8Vp+vpI6qBzJtwDm4O0+pVH/j3aGkXK8PaMlzaaM45gDtO+bPgrlqOQC5+0/JXqq3jBYW1elnVMIe6WgIkb3sJw7558FQi11caOKso5qedu6KZhY8H1tIwVk+50UluuNVRSnMlPK6JxxjJaSM+Sfj22ML+65URF0KCIiAiIgIiINK8FKYQaEoHbcOmdLIe/tuA8gFN6k9FFOFXLQtnx+wfqKk855rg7W9a1gDdzFmXivTfhdfXVobhr3MkHfuY0nzytNxHsLOfG0f75P7vF9Kt+L6i6BIiLtZiIiAiIgIiINP8K3huibMXEBopyST0/MV16guDxPE2inOC8bg045feFwcM2OfoezxxuAc6mIy4csbjnyXy/2+JssTWumaA4b+f5j7euOv30XDfMltV69dVvaIDDMRuHPa7kVRXGo51zKT1/DQ/Srlq6WKGSB7PSE7cAyPzj7wqZ40/wDcy+7Q/SrcP7+I6eIIiIuxkIiICIiAiIg0fwju1NU6RoIYJY3TUzDHJHuG5pBPUd/VSC7U9JVPBeZmPzk+jY3n8QVlJj3RvDmOLXDoQcELubebq0Ybc60D2Cof/awtx3yV4vjULI6WUtdI0hjBy3YaPHCoDi1cKW462qpKGVksUcccW9hy0lreeD3dPBRaorquqBFTVTzD2SSF3zXMp58f0ndRa2iIi2VEREH/2Q=="
}

let wine4 = {
    label: "Veuve Cliquot Brut",
    price: 380.00,
    quantity: 2,
    year: 0,
    vinicula: "Veuve Clicquot",
    alchoolic: 12.00,
    description: "Um dos champagnes mais conhecidos do mundo, o Veuve Clicquot encanta com sua elegância e cremosidade. Essa marca começou a ganhar visibilidade em 1805, quando a viúva Clicquot, Nicole Ponsardin assumiu a propriedade com toda sua criatividade e atitudes inovadoras. Com um estilo muito versátil, esse exemplar pode ser degustado sozinho ou acompanhar uma refeição completa, da entrada ao prato principal.",
    type: 3,
    country: 2,
    grape: 4,
    harmony: 4,
    review: 2,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABwYEBQMC/8QAOxAAAQMDAgIHAgsJAAAAAAAAAQACAwQFEQYSITEHEyJBUYGh0eEUFSMyYXGCkbGzwRY1YmRzorLD8P/EABoBAQEAAwEBAAAAAAAAAAAAAAAEAgMFBgH/xAAgEQACAgICAgMAAAAAAAAAAAAAAQIDBBEFISIyEzEz/9oADAMBAAIRAxEAPwC4oiIAiIgCmtxmkq9azs+ETuDJBGyMyO2MwBybnHPjyVKUvu9PHb9bSyxtj66SZrjIW8TvxjOPDcpcttQKMZbkyjW9xdADjHAHH1gFdS5aAPERMmN3eByC6luq9Fs0y9giIthiEREAREQBERAFL9TvEusHHPBs0Q5Z5EexVBSaonjmvk1S8k75i9vZPAbveFDn2KEFssw4OUm0VKk+Yc+P6BfdcNsqBOzdjGWg/wDei7lTTJSrTRNNNSaYREW0wCIiAIiIAiIgPC1vcXWvTFdURuLZXMEMRbzD3kNBH1Zz5KJG611LM/qKhwyO/DvxVD6Wq8mW22xnLt1UmDyx2GAj6dzz9lS2U7pXn6VzOQaeoswc5Rfi9FV0heKlzbLPPO98cw6iUuccZIIBxyzva0faVEUb06ZX6Ne+lbvqaWSR0TT3yMIlZ/dhV6iqYq2jgq6d26GeNskbvFrhkehV1D3Wj7F7XZ9kRFtMgiIgCIiAIiICM9IVUJ9X3AZ407Yqfy2CT/aVjGYOSe9aHWxxq29nvNUPyo1mI39lcjN7maX9m76O6j5Ktp+5sjJB5gg/gFQ9ASB2lKSJow2lfNStHgIpXxj0aFLOj+TFfVt8Y2n196p/R+3bY5xjA+MKs/fM8q/E/FGcDSoiKgzCIiAIiIAiIgJRqXTsFwvdzqOukjkfUndyI4MaOXkO9Z79ji04Fdkf0fetxdXFlwuJaNx+Enhn+Fq8eplEpZ8k/cx3LcB7fBeby7LPlkk+tnapw6J1qUo96P1pTTDbfVySOq3Sb2Yx1e3HFbnRsLKe1TxxlxaK6pPaPHjK4/qs9Z6h81QR1MjW4+c7HtWk0n+65T/O1P5z1Zxd1k/GTIsuiup+CPaREXYIgiIgCIiAIiICWagv9todQ3WirKlsMsc4cRIMDDo2EYJ4civO+PbPKWubdKbA4jbUAffhy3WrtCWPVLjUXCKWKrazaKmnfteW9wOQQfMHCilz6PbTSVToo6itLQcdp7M/4rn3cdXbJy21svq5CdcVHS6KRaNQ2qSZzYq+nlcwZcI5A7HkCVr9ESCWwCUA7ZKuqc3IxkdfJgrB9HXRxZYGS1RmrpC8AOjdK0NI+y0H1VVpqeKlgZBTxtjijG1jGjAAWzFwoY3q9mi/Ilc+0fVERWE4REQH/9k="
}
//fiz até o Veuve Clicquot, tem que rodar o prisma pra anotar os ID de referência..


// Para rodar a função cadastrar dos vinhos. Funcionou, mas precisou ser 1 por vez...

async function addWines() {
    await addNewWine(wine1, wine1.type, wine1.country, wine1.grape, wine1.harmony, wine1.review);
    await addNewWine(wine2, wine2.type, wine2.country, wine2.grape, wine2.harmony, wine2.review);
    await addNewWine(wine3, wine3.type, wine3.country, wine3.grape, wine3.harmony, wine3.review);
    await addNewWine(wine4, wine4.type, wine4.country, wine4.grape, wine4.harmony, wine4.review);
}
addWines()

// // //função para mostrar todos os vinhos cadastrados
// async function getAllWines() {
//     const wines = await prisma.wine.findMany()
//     console.log(wines)
// }

// // Rodar a função para mostrar todas os vinhos
// getAllWines()


// // função de pegar o vinho pelo Id
// async function getWineId(id: number) {
//     const WineId = await prisma.wine.findUnique({
//         where: {
//             id: id
//         },

//     })
//     if (WineId == null) {
//         console.log('Vinho não encontrada')
//     } else {
//         console.log(WineId)
//     }
// }

// // Rodar a função para mostrar o vinho do id 1
// getWineId(1)

// // Função de Atualizar o Vinho pelo id

// async function updateWine(id: number, wine: WineDTO, typeId: number, countryId: number, grapeId: number, harmonyId: number, reviewId: number) {
//     const upwine = await prisma.wine.update({
//         where: {
//             id: id
//         },
//         data: {
//             label: wine.label,
//             price: wine.price,
//             quantity: wine.quantity,
//             year: wine.year,
//             vinicula: wine.vinicula,
//             alchoolic: wine.alchoolic,
//             description: wine.description,

//             type: {
//                 connect: {
//                     id: typeId
//                 }
//             },
//             country: {
//                 connect: {
//                     id: countryId
//                 }
//             },
//             grape: {
//                 connect: {
//                     id: grapeId
//                 }
//             },
//             harmony: {
//                 connect: {
//                     id: harmonyId
//                 }
//             },
//             review: {
//                 connect: {
//                     id: reviewId
//                 }
//             },
//         },
//     }
//     )
//     if (upwine == null) {
//         console.log('Vinho não encontrado')
//     } else {
//         console.log('Vinho atualizado com sucesso: ' + (upwine))
//     }
// }
// // Rodar a função para update do vinho do id 1, VERIFICAR ****

// // updateWine(1, {
// //     label: "Freixenet Cava Cordon Rosado Brut Rosé",
// //     price: 75.00,
// //     quantity: 9,
// //     year: 0,
// //     vinicula: "Freixenet",
// //     alchoolic: 12.00,
// //     description: "Essa cava rosé com uma coloração cereja brilhante e aromas de framboesas e amoras, notas de louro, é muito refrescante com suas borbulhas. Uma tradição na produção de espumantes através do método tradicional a Freixenet é a empresa mais conhecida na Espanha e referência no mercado internacional.",
// //     type: 1,
// //     country: 1,
// //     grape: 1,
// //     harmony: 1,
// //     review: 1
// // }, wine1.type, wine1.country, wine1.grape, wine1.harmony, wine1.review);


// // Deletar Vinho  por ID
// async function deleteWine(id: number) {
//     const wine = await prisma.wine.delete({
//         where: {
//             id: id
//         }
//     })
//     if (wine == null) {
//         console.log('Vinho não encontrado')
//     } else {
//         console.log('Vinho deletado com sucesso')
//     }
// }

// // Rodar função para deletar a harmonizacao do id 1
// // deleteWine(51)



// // FALTA FAZER AS FUNÇOES DE   WineHarmony?

// async function main() {
//     console.log('Hello world')
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
