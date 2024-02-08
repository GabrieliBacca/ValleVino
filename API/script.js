"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//iniciar com o prisma
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
//Criar um novo User
function AddNewUser($userDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.create({
                        data: $userDTO
                    })];
                case 1:
                    user = _a.sent();
                    console.log(user);
                    return [2 /*return*/];
            }
        });
    });
}
//Criar um novo Usuario
var user1 = {
    name: 'Rodrigo Ulir Brazz',
    email: 'rulir@hotmail.com',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 5547988035265,
};
var user2 = {
    name: 'Rodrigo Joel',
    email: 'devrodrigobnu@gmail.com',
    password: 'vinho123',
    address: 'Rua dos vinhos, 123',
    birthday: new Date(1990, 11, 26), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 5547996740173,
};
var user3 = {
    name: 'Gabrieli Bacca',
    email: 'baccagabrieli@gmail.com',
    password: '1234',
    address: 'Rua Bonifácio Carlos Deschamps, 120',
    birthday: new Date(2005, 2, 16), //ano, mes, dia e janeiro = 0  
    gender: 'Feminino',
    telephone: 5547984196733,
};
var user4 = {
    name: 'Bruno Amaral',
    email: 'brunexcorp@gmail.com',
    password: '1234',
    address: 'Estrada das Videiras S/N, km 88',
    birthday: new Date(1981, 0, 30), //ano, mes, dia e janeiro = 0  
    gender: 'Masculino',
    telephone: 5547992421400,
};
//rodar a funcao pra criar os 4 usuarios
// AddNewUser(user1)
// AddNewUser(user2)
// AddNewUser(user3)
// AddNewUser(user4)
// funcao para mostrar todos os Usuários... GET
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.findMany()];
                case 1:
                    users = _a.sent();
                    console.log(users);
                    return [2 /*return*/];
            }
        });
    });
}
//rodar a função
// getAllUsers()
// // funcao para buscar o Usuário pelo ID
function getUserId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var userId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.findUnique({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    userId = _a.sent();
                    if (userId == null) {
                        console.log('Usuário não encontrado');
                    }
                    else {
                        console.log(userId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// para retornar o Usuário do id 1, que existe
// getUserId(1)
// para retornar o Usuário do id 5, que não existe
getUserId(5);
// Funcao para atualizar o Usuário
function updateUser(id, userDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.update({
                        where: {
                            id: id
                        },
                        data: userDTO
                    })];
                case 1:
                    user = _a.sent();
                    if (user == null) {
                        console.log('Usuário não encontrado');
                    }
                    else {
                        console.log('Usuário atualizado com sucesso: ' + (user));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para update o user 1 e alterar o nome  ***verificar se alterou só o nome...ARRUMAR
// updateUser(1, {
//     name: 'Rodrigo Ulir Braz',
//     email: 'rulir@hotmail.com',
//     password: 'vinho123',
//     address: 'Rua dos vinhos, 123',
//     birthday: new Date(1982, 0, 7), //ano, mes, dia e janeiro = 0  
//     gender: 'Masculino',
//     telephone: 5547988035265,
// });
getAllUsers();
// // Deletar usuario por ID
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    user = _a.sent();
                    if (user == null) {
                        console.log('Usuário não encontrado');
                    }
                    else {
                        console.log('Usuário deletado com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//Rodar a função para deletar o user 1
// deleteUser(1)
//agora para o Review
function addNewReview($review, $userID, $wineID) {
    return __awaiter(this, void 0, void 0, function () {
        var review;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.review.create({
                        data: {
                            review: $review.review,
                            createdAt: $review.createdAt,
                            updatedAt: $review.updatedAt,
                            user: {
                                connect: {
                                    id: $userID | $wineID //ARRUMAR aqui o ID do wine e do user
                                }
                            }
                        }
                    })];
                case 1:
                    review = _a.sent();
                    console.log(review);
                    return [2 /*return*/];
            }
        });
    });
}
// Criar o review...
var review1 = {
    review: 'Bom vinho, com notas difenciadas',
    createdAt: new Date(),
    updatedAt: new Date(),
};
var review2 = {
    review: 'Bom vinho, com notas elegante',
    createdAt: new Date(),
    updatedAt: new Date(),
};
// Para rodar  a funcao do Review, feito pelo user de id 2 e para o wine 1
// addNewReview(review1, 1, 1)
// addNewReview(review2, 2, 2)
//função para mostrar todos os Reviews
function getAllReviews() {
    return __awaiter(this, void 0, void 0, function () {
        var reviews;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.review.findMany()];
                case 1:
                    reviews = _a.sent();
                    console.log(reviews);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todos os Reviews
// getAllReviews()
// função de pegar o Review pelo Id
function getReviewId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var ReviewId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.review.findUnique({
                        where: {
                            id: id
                        },
                        include: {
                            user: {},
                            Wine: {}
                        }
                    })];
                case 1:
                    ReviewId = _a.sent();
                    if (ReviewId == null) {
                        console.log('Review não encontrado');
                    }
                    else {
                        console.log(ReviewId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar a função para mostrar o Review do id 1
// getReviewId(1)
// // Função de Atualizar o Review
function updateReview(id, reviewDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var review;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.review.update({
                        where: {
                            id: id
                        },
                        data: reviewDTO
                    })];
                case 1:
                    review = _a.sent();
                    if (review == null) {
                        console.log('Review não encontrado');
                    }
                    else {
                        console.log('Review atualizado com sucesso: ' + (review));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar a função para update o Review do id 1, VERIFICAR ****
// updateReview(1, {
//     review: 'Bom vinho, com nota elegante',
//     createdAt: new Date(),
//     updatedAt: new Date(),
// })
// Deletar Review por ID
function deleteReview(id) {
    return __awaiter(this, void 0, void 0, function () {
        var review;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.review.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    review = _a.sent();
                    if (review == null) {
                        console.log('Review não encontrado');
                    }
                    else {
                        console.log('Review deletado com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar função para deletar o Review do id 1
// deleteReview(1)
// // Funções para Shopping / compras historico  
function addNewShopping($shopping, $userID) {
    return __awaiter(this, void 0, void 0, function () {
        var shopping;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.shopping.create({
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
                    })];
                case 1:
                    shopping = _a.sent();
                    console.log(shopping);
                    return [2 /*return*/];
            }
        });
    });
}
// // Criar a compra...
var shopping1 = {
    shopping: '3 vinhos modelo, preço total de R$ 300,00',
    createdAt: new Date(),
    updatedAt: new Date(),
};
// Para rodar  a funcao do Compra, feito pelo user de id 1  
// addNewShopping(shopping1, 1)
//função para mostrar todos as Compras
function getAllShoppings() {
    return __awaiter(this, void 0, void 0, function () {
        var shoppings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.shopping.findMany()];
                case 1:
                    shoppings = _a.sent();
                    console.log(shoppings);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todos as Compras
getAllShoppings();
// função de pegar a Compra pelo Id
function getShoppingId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var ShoppingId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.shopping.findUnique({
                        where: {
                            id: id
                        },
                        include: {
                            user: {},
                            Wine: {}
                        }
                    })];
                case 1:
                    ShoppingId = _a.sent();
                    if (ShoppingId == null) {
                        console.log('Review não encontrado');
                    }
                    else {
                        console.log(ShoppingId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar o Compra do id 1
getShoppingId(1);
// // Função de Atualizar a Compra
function updateShopping(id, shoppingDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var shopping;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.shopping.update({
                        where: {
                            id: id
                        },
                        data: shoppingDTO
                    })];
                case 1:
                    shopping = _a.sent();
                    if (shopping == null) {
                        console.log('Compra não encontrada');
                    }
                    else {
                        console.log('Compra atualizada com sucesso: ' + (shopping));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar a função para update a Compra do id 1, VERIFICAR ****
// updateShopping(1, {
//     shopping: 'Comprou 2 vinhos, preco total de R$ 600,00',
//     createdAt: new Date(),
//     updatedAt: new Date(),
// })
// // Deletar Compra por ID
function deleteShopping(id) {
    return __awaiter(this, void 0, void 0, function () {
        var shopping;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.shopping.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    shopping = _a.sent();
                    if (shopping == null) {
                        console.log('Compra não encontrada');
                    }
                    else {
                        console.log('Compra deletada com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar função para deletar o Compra do id 1
// deleteShopping(1)
getAllShoppings();
// // Funções Type / tipo de vinho  
function addNewType($type) {
    return __awaiter(this, void 0, void 0, function () {
        var type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.type.create({
                        data: {
                            type: $type.type,
                        }
                    })];
                case 1:
                    type = _a.sent();
                    console.log(type);
                    return [2 /*return*/];
            }
        });
    });
}
// Criar o tipo...
var type1 = {
    type: 'Espumante2',
};
var type2 = {
    type: 'Champagne',
};
var type3 = {
    type: 'Tinto',
};
var type4 = {
    type: 'Branco',
};
// Para rodar  a funcao do tipo de uva.
// addNewType(type1)
// addNewType(type2)
// addNewType(type3)
// addNewType(type4)
//função para mostrar todos os tipos de vinhos
function getAllTypes() {
    return __awaiter(this, void 0, void 0, function () {
        var types;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.type.findMany()];
                case 1:
                    types = _a.sent();
                    console.log(types);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todos os tipos de vinhos
getAllTypes();
// função de pegar o Type pelo Id
function getTypeId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var TypeId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.type.findUnique({
                        where: {
                            id: id
                        },
                    })];
                case 1:
                    TypeId = _a.sent();
                    if (TypeId == null) {
                        console.log('Tipo de vinho não encontrado');
                    }
                    else {
                        console.log(TypeId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar a função para mostrar o tipo do vinho do id 1
getTypeId(1);
// // Função de Atualizar o tipo de uva pelo id
function updateType(id, typeDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.type.update({
                        where: {
                            id: id
                        },
                        data: typeDTO
                    })];
                case 1:
                    type = _a.sent();
                    if (type == null) {
                        console.log('Tipo de vinho não encontrado');
                    }
                    else {
                        console.log('Tipo de vinho atualizado com sucesso: ' + (type));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para update a Type do id 1, VERIFICAR ****
// updateType(1, {
//     type: 'Espumante',
// })
// updateType(3, {
//     type: 'Champagne',
// })
// // Deletar Type  por ID
function deleteType(id) {
    return __awaiter(this, void 0, void 0, function () {
        var type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.type.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    type = _a.sent();
                    if (type == null) {
                        console.log('Tipo de vinho não encontrado');
                    }
                    else {
                        console.log('Tipo de vinho deletado com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar função para deletar o Type do id 1
// // deleteType(6)
// // Funções Country / país  
function addNewCountry($country) {
    return __awaiter(this, void 0, void 0, function () {
        var country;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.country.create({
                        data: {
                            country: $country.country,
                        }
                    })];
                case 1:
                    country = _a.sent();
                    console.log(country);
                    return [2 /*return*/];
            }
        });
    });
}
// Criar os paises...
var country1 = {
    country: 'Expanha',
};
var country2 = {
    country: 'França',
};
var country3 = {
    country: 'Argentina',
};
var country4 = {
    country: 'Italia',
};
var country5 = {
    country: 'Portugal',
};
var country6 = {
    country: 'Uruguai',
};
// Para rodar  a funcao dos paises.
// addNewCountry(country1)
// addNewCountry(country2)
// addNewCountry(country3)
// addNewCountry(country4)
// addNewCountry(country5)
// addNewCountry(country6)
//função para mostrar todos os paises cadastrados
function getAllCountries() {
    return __awaiter(this, void 0, void 0, function () {
        var countrys;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.country.findMany()];
                case 1:
                    countrys = _a.sent();
                    console.log(countrys);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todos Country 
getAllCountries();
// função de pegar o Country pelo Id
function getCountryId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var CountryId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.country.findUnique({
                        where: {
                            id: id
                        },
                    })];
                case 1:
                    CountryId = _a.sent();
                    if (CountryId == null) {
                        console.log('País não encontrado');
                    }
                    else {
                        console.log(CountryId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar o Country do id 1
getCountryId(1);
// Função de Atualizar o Country pelo id
function updateCountry(id, countryDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var country;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.country.update({
                        where: {
                            id: id
                        },
                        data: countryDTO
                    })];
                case 1:
                    country = _a.sent();
                    if (country == null) {
                        console.log('País não encontrado');
                    }
                    else {
                        console.log('País atualizado com sucesso: ' + (country));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar a função para update do Country do id 1, VERIFICAR ****
// updateCountry(2, {
//     country: 'Espanha',
// })
// Deletar Country  por ID
function deleteCountry(id) {
    return __awaiter(this, void 0, void 0, function () {
        var country;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.country.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    country = _a.sent();
                    if (country == null) {
                        console.log('País não encontrado');
                    }
                    else {
                        console.log('País deletado com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar função para deletar o Country do id 1
// deleteCountry(11)
// Funções Grape / uva  
function addNewGrape(grape) {
    return __awaiter(this, void 0, void 0, function () {
        var Newgrape;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.grape.create({
                        data: {
                            grape: grape.grape,
                        }
                    })];
                case 1:
                    Newgrape = _a.sent();
                    console.log(Newgrape);
                    return [2 /*return*/];
            }
        });
    });
}
// Criar as uvas...
var grape1 = {
    grape: 'Trepat, Grenache',
};
var grape2 = {
    grape: 'Macabeo',
};
var grape3 = {
    grape: 'Pinot Noir',
};
var grape4 = {
    grape: 'Cabernet Franc',
};
var grape5 = {
    grape: 'Cabernet Malbec ',
};
var grape6 = {
    grape: 'Sangiovese',
};
var grape7 = {
    grape: ' Corvina, Rondinella, Croatina, Corvinone',
};
var grape8 = {
    grape: 'Alicante Bouschet, Touriga Nacional, Aragonez, Syrah, Trincadeira, Cabernet Sauvignon e Touriga',
};
var grape9 = {
    grape: ' Alicante Bouschet (65%), Aragonez (20%) e Touriga Nacional (15%)',
};
var grape10 = {
    grape: 'Tannat',
};
var grape11 = {
    grape: 'Marselan',
};
// Para rodar  a funcao cadastrar das uvas.
// addNewGrape(grape1)
// addNewGrape(grape2)
// addNewGrape(grape3)
// addNewGrape(grape4)
// addNewGrape(grape5)
// addNewGrape(grape6)
// addNewGrape(grape7)
// addNewGrape(grape8)
// addNewGrape(grape9)
// addNewGrape(grape10)
// addNewGrape(grape11)
//função para mostrar todos as uvas cadastrados
function getAllGrapes() {
    return __awaiter(this, void 0, void 0, function () {
        var grapes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.grape.findMany()];
                case 1:
                    grapes = _a.sent();
                    console.log(grapes);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todas as uvas
getAllGrapes();
// função de pegar a Uva pelo Id
function getGrapeId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var GrapeId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.grape.findUnique({
                        where: {
                            id: id
                        },
                    })];
                case 1:
                    GrapeId = _a.sent();
                    if (GrapeId == null) {
                        console.log('Uva não encontrado');
                    }
                    else {
                        console.log(GrapeId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar a uva do id 1
getGrapeId(1);
// Função de Atualizar o Uva pelo id
function updateGrape(id, grapeDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var grape;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.grape.update({
                        where: {
                            id: id
                        },
                        data: grapeDTO
                    })];
                case 1:
                    grape = _a.sent();
                    if (grape == null) {
                        console.log('Uva não encontrada');
                    }
                    else {
                        console.log('Uva atualizada com sucesso: ' + (grape));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para update da Uva do id 1, VERIFICAR ****
// updateGrape(7, {
//     grape: 'Trepat e Grenache',
// })
// Deletar Uva  por ID
function deleteGrape(id) {
    return __awaiter(this, void 0, void 0, function () {
        var grape;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.grape.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    grape = _a.sent();
                    if (grape == null) {
                        console.log('Uva não encontrado');
                    }
                    else {
                        console.log('Uva deletada com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar função para deletar a Uva do id 1
// deleteGrape(19)
// Funções Harmony / harmonizacao  
function addNewHarmony($harmony) {
    return __awaiter(this, void 0, void 0, function () {
        var harmony;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.harmony.create({
                        data: {
                            harmony: $harmony.harmony,
                        }
                    })];
                case 1:
                    harmony = _a.sent();
                    console.log(harmony);
                    return [2 /*return*/];
            }
        });
    });
}
// Criar as harmonizaçôes, retirei do wine.com.br e vivino.com.br...
var harmony1 = {
    harmony: 'Carpaccio de salmão defumado, escalopinho de mignon, casquinha de siri, risoto de abóbora com quadradinhos de legumes, fettucine all matriciana, sashimi, puchero, cassoulet, feijoada, berinjela gratinada com ricota defumada, Grenachi.',
};
var harmony2 = {
    harmony: 'Canapés variados, risoto de presunto cru, carpaccio, peixe grelhado com purê de batatas, bolinho de bacalhau, comida japonesa.',
};
var harmony3 = {
    harmony: 'Canapés à base de peixe, frutos do mar, ceviche de peixe branco, salmão assado e queijos de massa mole, salgadinhos de festa, sanduíches e tortas salgadas.',
};
var harmony4 = {
    harmony: 'Talharim com frutos do mar, camarão empanado, sashimi de salmão, ostras grelhadas, risoto de pera com nozes, queijos e embutidos.',
};
var harmony5 = {
    harmony: 'Carnes Vermelhas, Carne Suína, Queijos.',
};
var harmony6 = {
    harmony: 'Carne vermelha e cordeiro.',
};
//lembrar calcareo é com carne vermelha e cordeiro tb, arrogante syrah tb....
var harmony7 = {
    harmony: 'Carne vermelha, cordeiro, carne de caça (cervo, veado), aves.',
};
var harmony8 = {
    harmony: 'Carne vermelha, cordeiro, massa, aves.'
}; //combina com o bianchi e jean claude
var harmony9 = {
    harmony: 'Carne vermelha, cordeiro, porco, aves, cogumelos, quejo azul.',
};
var harmony10 = {
    harmony: 'Porco, peixe gordo (salmão, atum, etc), vegetariano, aves.',
};
var harmony11 = {
    harmony: 'Carne vermelha, cordeiro,porco.',
};
//fiz até o Luigi Bosca Malbec 2022
// Para rodar  a funcao cadastrar das harmonizacoes.
// addNewHarmony(harmony1)
// addNewHarmony(harmony2)
// addNewHarmony(harmony3)
// addNewHarmony(harmony4)
// addNewHarmony(harmony5)
// addNewHarmony(harmony6)
// addNewHarmony(harmony7)
// addNewHarmony(harmony8)
// addNewHarmony(harmony9)
// addNewHarmony(harmony10)
// addNewHarmony(harmony11)
//função para mostrar todos as harmonizacoes cadastradas
function getAllHarmonies() {
    return __awaiter(this, void 0, void 0, function () {
        var harmonys;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.harmony.findMany()];
                case 1:
                    harmonys = _a.sent();
                    console.log(harmonys);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todas as harmonizacoes
getAllHarmonies();
// função de pegar a Harmonizacao pelo Id
function getHarmonyId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var HarmonyId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.harmony.findUnique({
                        where: {
                            id: id
                        },
                    })];
                case 1:
                    HarmonyId = _a.sent();
                    if (HarmonyId == null) {
                        console.log('Harmonização não encontrada');
                    }
                    else {
                        console.log(HarmonyId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar a harmonizacao do id 1
getHarmonyId(1);
// // Função de Atualizar a Harmonizacao pelo id
function updateHarmony(id, harmonyDTO) {
    return __awaiter(this, void 0, void 0, function () {
        var harmony;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.harmony.update({
                        where: {
                            id: id
                        },
                        data: harmonyDTO
                    })];
                case 1:
                    harmony = _a.sent();
                    if (harmony == null) {
                        console.log('Harmonização não encontrada');
                    }
                    else {
                        console.log('Harmonização atualizada com sucesso: ' + (harmony));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// // Rodar a função para update da harmonizacao do id 1, VERIFICAR ****
// updateHarmony(10, {
//     harmony: 'Carpaccio de salmão defumado, escalopinho de mignon, casquinha de siri, risoto de abóbora com quadradinhos de legumes, fettucine all matriciana, sashimi, puchero, cassoulet, feijoada, berinjela gratinada com ricota defumada, Grenache.',
// })
// Deletar Harmonizacao  por ID
function deleteHarmony(id) {
    return __awaiter(this, void 0, void 0, function () {
        var harmony;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.harmony.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    harmony = _a.sent();
                    if (harmony == null) {
                        console.log('Harmonização não encontrada');
                    }
                    else {
                        console.log('Harmonização deletada com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar função para deletar a harmonizacao do id 1
// deleteHarmony(19)
// Function addNewWine refactored with error handling
function addNewWine(wine, typeId, countryId, grapeId, harmonyId, reviewId) {
    return __awaiter(this, void 0, void 0, function () {
        var newWine, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma.wine.create({
                            data: {
                                label: wine.label,
                                price: wine.price,
                                quantity: wine.quantity,
                                year: wine.year,
                                vinicula: wine.vinicula,
                                alchoolic: wine.alchoolic,
                                description: wine.description,
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
                        })];
                case 1:
                    newWine = _a.sent();
                    console.log(newWine);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error adding new wine:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Criar os vinhos usando os IDs recém-criados
var wine1 = {
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
    review: 1 // Você precisa definir um ID de revisão válido
};
var wine2 = {
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
    review: 1
};
var wine3 = {
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
    review: 2
};
var wine4 = {
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
    review: 2
};
//fiz até o Veuve Clicquot, tem que rodar o prisma pra anotar os ID de referência..
// Para rodar a função cadastrar dos vinhos. Funcionou, mas precisou ser 1 por vez...
// addNewWine(wine1, wine1.type, wine1.country, wine1.grape, wine1.harmony, wine1.review);
// addNewWine(wine2, wine2.type, wine2.country, wine2.grape, wine2.harmony, wine2.review);
// addNewWine(wine3, wine3.type, wine3.country, wine3.grape, wine3.harmony, wine3.review);
// addNewWine(wine4, wine4.type, wine4.country, wine4.grape, wine4.harmony, wine4.review);
// //função para mostrar todos os vinhos cadastrados
function getAllWines() {
    return __awaiter(this, void 0, void 0, function () {
        var wines;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.wine.findMany()];
                case 1:
                    wines = _a.sent();
                    console.log(wines);
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar todas os vinhos
getAllWines();
// função de pegar o vinho pelo Id
function getWineId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var WineId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.wine.findUnique({
                        where: {
                            id: id
                        },
                    })];
                case 1:
                    WineId = _a.sent();
                    if (WineId == null) {
                        console.log('Vinho não encontrada');
                    }
                    else {
                        console.log(WineId);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para mostrar o vinho do id 1
getWineId(1);
// Função de Atualizar o Vinho pelo id
function updateWine(id, wine, typeId, countryId, grapeId, harmonyId, reviewId) {
    return __awaiter(this, void 0, void 0, function () {
        var upwine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.wine.update({
                        where: {
                            id: id
                        },
                        data: {
                            label: wine.label,
                            price: wine.price,
                            quantity: wine.quantity,
                            year: wine.year,
                            vinicula: wine.vinicula,
                            alchoolic: wine.alchoolic,
                            description: wine.description,
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
                        },
                    })];
                case 1:
                    upwine = _a.sent();
                    if (upwine == null) {
                        console.log('Vinho não encontrado');
                    }
                    else {
                        console.log('Vinho atualizado com sucesso: ' + (upwine));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar a função para update do vinho do id 1, VERIFICAR ****
// updateWine(1, {
//     label: "Freixenet Cava Cordon Rosado Brut Rosé",
//     price: 75.00,
//     quantity: 9,
//     year: 0,
//     vinicula: "Freixenet",
//     alchoolic: 12.00,
//     description: "Essa cava rosé com uma coloração cereja brilhante e aromas de framboesas e amoras, notas de louro, é muito refrescante com suas borbulhas. Uma tradição na produção de espumantes através do método tradicional a Freixenet é a empresa mais conhecida na Espanha e referência no mercado internacional.",
//     type: 1,
//     country: 1,
//     grape: 1,
//     harmony: 1,
//     review: 1
// }, wine1.type, wine1.country, wine1.grape, wine1.harmony, wine1.review);
// Deletar Vinho  por ID
function deleteWine(id) {
    return __awaiter(this, void 0, void 0, function () {
        var wine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.wine.delete({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    wine = _a.sent();
                    if (wine == null) {
                        console.log('Vinho não encontrado');
                    }
                    else {
                        console.log('Vinho deletado com sucesso');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Rodar função para deletar a harmonizacao do id 1
// deleteWine(51)
// FALTA FAZER AS FUNÇOES DE   WineHarmony?
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Hello world');
            return [2 /*return*/];
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
