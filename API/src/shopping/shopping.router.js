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
exports.ShoppingRouter = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator"); // serve para uma camada de segurança para validar as requisições .... uso opcional
var ShoppingService = require("./shopping.service");
exports.ShoppingRouter = express_1.default.Router();
// para criar uma rota sem variável
exports.ShoppingRouter.get("/", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ShoppingService.getShoppings()];
            case 1:
                user = _a.sent();
                return [2 /*return*/, response.status(200).json(user)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, response.status(500).json(error_1.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
exports.ShoppingRouter.get("/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, shopping, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(request.params.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ShoppingService.getshoppingById(id)];
            case 2:
                shopping = _a.sent();
                if (shopping) {
                    return [2 /*return*/, response.status(200).json(shopping)];
                }
                else {
                    return [2 /*return*/, response.status(404).json("Compra não encontrada")];
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, response.status(500).json(error_2.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
// rota para criar uma nova compra
exports.ShoppingRouter.post('/', (0, express_validator_1.body)("shopping").isString(), (0, express_validator_1.body)("userId").isNumeric(), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var shopping, newShopping, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                shopping = request.body;
                return [4 /*yield*/, ShoppingService.createShopping(shopping, shopping.userId)]; // use userId em vez de userid
            case 1:
                newShopping = _a.sent() // use userId em vez de userid
                ;
                return [2 /*return*/, response.status(201).json(newShopping)];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, response.status(500).json(error_3.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// rota para atualizar uma compra
exports.ShoppingRouter.put('/:id', (0, express_validator_1.body)("shopping").isString(), (0, express_validator_1.body)("userId").isNumeric(), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var shopping, id, updateShopping, erro_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                shopping = request.body;
                id = parseInt(request.params.id) // ID vem da ROTA
                ;
                return [4 /*yield*/, ShoppingService.updateShopping(shopping, shopping.userId, id)]; // use userId em vez de userid
            case 1:
                updateShopping = _a.sent() // use userId em vez de userid
                ;
                return [2 /*return*/, response.status(201).json(updateShopping)];
            case 2:
                erro_1 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_1.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// rota para deletar uma compra
exports.ShoppingRouter.delete("/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, shopping, erro_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(request.params.id) //precisa do parseint para passar o valor de STRING do ID para INTEIRO
                ;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ShoppingService.deleteShoppingById(id)];
            case 2:
                shopping = _a.sent();
                if (shopping)
                    return [2 /*return*/, response.status(200).json("Commpra deletada com sucesso!")];
                else
                    return [2 /*return*/, response.status(404).json("Compra não encontrada")];
                return [3 /*break*/, 4];
            case 3:
                erro_2 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_2.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
