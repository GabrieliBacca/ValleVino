"use strict";
//Service são o agrupamento dos comandos que seriam utilizado pelo PRISMA para acessar o banco de dados.....
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.deleteWineById = exports.updateWine = exports.createWine = exports.getWineById = exports.getWines = void 0;
var db_server_1 = require("../utils/db.server");
// servico para pegar todos os vinhos.               .... 
var getWines = function () { return __awaiter(void 0, void 0, void 0, function () {
    var wines, formattedWines;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_server_1.db.wine.findMany({
                    select: {
                        id: true,
                        label: true,
                        price: true,
                        quantity: true,
                        year: true,
                        vinicula: true,
                        alchoolic: true,
                        description: true,
                        type: { select: { type: true } },
                        country: { select: { country: true } },
                        grape: { select: { grape: true } },
                        harmony: true,
                        review: true,
                        img: true,
                    }
                })];
            case 1:
                wines = _a.sent();
                formattedWines = wines.map(function (wine) { return (__assign(__assign({}, wine), { type: wine.type.type, country: wine.country.country, grape: wine.grape.grape })); });
                return [2 /*return*/, formattedWines];
        }
    });
}); };
exports.getWines = getWines;
//servico para pegar um vinho pelo ID
var getWineById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var wine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_server_1.db.wine.findUnique({
                    where: {
                        id: id
                    },
                    select: {
                        id: true,
                        label: true,
                        price: true,
                        quantity: true,
                        year: true,
                        vinicula: true,
                        alchoolic: true,
                        description: true,
                        img: true,
                    }
                })];
            case 1:
                wine = _a.sent();
                return [2 /*return*/, wine];
        }
    });
}); };
exports.getWineById = getWineById;
// servico para criar um novo vinho
var createWine = function (newWineData, typeId, countryId, grapeId, harmonyId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_server_1.db.wine.create({
                    data: {
                        label: newWineData.label,
                        price: newWineData.price,
                        quantity: newWineData.quantity,
                        vinicula: newWineData.vinicula,
                        year: newWineData.year,
                        alchoolic: newWineData.alchoolic,
                        description: newWineData.description,
                        type: { connect: { id: typeId } },
                        country: { connect: { id: countryId } },
                        grape: { connect: { id: grapeId } },
                        harmony: { connect: { id: harmonyId } },
                        img: newWineData.img,
                    },
                    select: {
                        id: true,
                        label: true,
                        price: true,
                        quantity: true,
                        year: true,
                        vinicula: true,
                        alchoolic: true,
                        description: true,
                        type: true,
                        country: true,
                        grape: true,
                        harmony: true,
                        review: true,
                        img: true,
                    }
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createWine = createWine;
// servico para atualizar um vinho
var updateWine = function (newWineData, id, typeId, countryId, grapeId, harmonyId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, db_server_1.db.wine.update({
                where: {
                    id: id
                },
                data: {
                    label: newWineData.label,
                    price: newWineData.price,
                    quantity: newWineData.quantity,
                    vinicula: newWineData.vinicula,
                    year: newWineData.year,
                    alchoolic: newWineData.alchoolic,
                    description: newWineData.description,
                    type: { connect: { id: typeId } },
                    country: { connect: { id: countryId } },
                    grape: { connect: { id: grapeId } },
                    harmony: { connect: { id: harmonyId } },
                    img: newWineData.img,
                },
                select: {
                    id: true,
                    label: true,
                    price: true,
                    quantity: true,
                    year: true,
                    vinicula: true,
                    alchoolic: true,
                    description: true,
                    type: true,
                    country: true,
                    grape: true,
                    harmony: true,
                    review: true,
                    img: true,
                }
            })];
    });
}); };
exports.updateWine = updateWine;
// servico para deletar um vinho
var deleteWineById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, db_server_1.db.wine.delete({
                where: {
                    id: id
                }
            })];
    });
}); };
exports.deleteWineById = deleteWineById;
//modelo JSON para adicionar/atualizar um vinho:
// {
//     "label": "Angelica Zapata Cabernet Franc",
//         "price": 145.00,
//             "quantity": 1,
//                 "vinicula": "Catena Zapata",
//                     "year": 2019,
//                         "alchoolic": 14.00,
//                             "description": "Angelica Zapata Cabernet Franc é uma prova de que a Argentina não se resume apenas à Malbec. A Cabernet Franc origina vinhos fantásticos no país, principalmente nas mãos da Catena – produtor que faz muito sucesso entre os clientes da Vino Mundi. O vinho é elegância pura. Longo, persistente e com a intensidade de um tinto que descansou por 18 meses em carvalho.",
//                                 "typeId": 2,
//                                     "countryId": 3,
//                                         "grapeId": 10,
//                                             "harmonyId": 1
// }
