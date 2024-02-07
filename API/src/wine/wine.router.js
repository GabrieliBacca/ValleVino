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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WineRouter = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator"); // serve para uma camada de segurança para validar as requisições .... uso opcional
var WineService = require("./wine.service");
exports.WineRouter = express_1.default.Router();
// para criar uma rota sem variável
exports.WineRouter.get("/", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var wines, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, WineService.getWines()];
            case 1:
                wines = _a.sent();
                return [2 /*return*/, response.status(200).json(wines)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, response.status(500).json(error_1.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
exports.WineRouter.get("/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, wine, erro_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(request.params.id) //precisa do parseint para passar o valor de STRING do ID para INTEIRO
                ;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, WineService.getWineById(id)];
            case 2:
                wine = _a.sent();
                if (wine)
                    return [2 /*return*/, response.status(200).json(wine)];
                else
                    return [2 /*return*/, response.status(404).json("Usuário não encontrado")];
                return [3 /*break*/, 4];
            case 3:
                erro_1 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_1.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
// rota para criar um novo vinho
exports.WineRouter.post('/', (0, express_validator_1.body)("label").isString(), (0, express_validator_1.body)("quantity").isNumeric(), (0, express_validator_1.body)("price").isNumeric(), (0, express_validator_1.body)("year").isNumeric(), (0, express_validator_1.body)("vinicula").isString(), (0, express_validator_1.body)("alchoolic").isNumeric(), (0, express_validator_1.body)("description").isString(), (0, express_validator_1.body)("typeId").isNumeric(), (0, express_validator_1.body)("countryId").isNumeric(), (0, express_validator_1.body)("grapeId").isNumeric(), (0, express_validator_1.body)("harmonyId").isNumeric(), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, typeId, countryId, grapeId, harmonyId, newWineData, newWine, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, typeId = _a.typeId, countryId = _a.countryId, grapeId = _a.grapeId, harmonyId = _a.harmonyId, newWineData = __rest(_a, ["typeId", "countryId", "grapeId", "harmonyId"]);
                return [4 /*yield*/, WineService.createWine(newWineData, typeId, countryId, grapeId, harmonyId)];
            case 1:
                newWine = _b.sent();
                return [2 /*return*/, response.status(201).json(newWine)];
            case 2:
                error_2 = _b.sent();
                return [2 /*return*/, response.status(500).json(error_2.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// rota para atualizar um vinho
exports.WineRouter.put('/:id', (0, express_validator_1.body)("label").isString(), (0, express_validator_1.body)("quantity").isNumeric(), (0, express_validator_1.body)("price").isNumeric(), (0, express_validator_1.body)("year").isNumeric(), (0, express_validator_1.body)("vinicula").isString(), (0, express_validator_1.body)("alchoolic").isNumeric(), (0, express_validator_1.body)("description").isString(), (0, express_validator_1.body)("typeId").isNumeric(), (0, express_validator_1.body)("countryId").isNumeric(), (0, express_validator_1.body)("grapeId").isNumeric(), (0, express_validator_1.body)("harmonyId").isNumeric(), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, typeId, countryId, grapeId, harmonyId, wineData, id, updateWine, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, typeId = _a.typeId, countryId = _a.countryId, grapeId = _a.grapeId, harmonyId = _a.harmonyId, wineData = __rest(_a, ["typeId", "countryId", "grapeId", "harmonyId"]);
                id = parseInt(request.params.id);
                return [4 /*yield*/, WineService.updateWine(wineData, id, typeId, countryId, grapeId, harmonyId)];
            case 1:
                updateWine = _b.sent();
                return [2 /*return*/, response.status(201).json(updateWine)];
            case 2:
                error_3 = _b.sent();
                return [2 /*return*/, response.status(500).json(error_3.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// rota para deletar um vinho
exports.WineRouter.delete("/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, wine, erro_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(request.params.id) //precisa do parseint para passar o valor de STRING do ID para INTEIRO
                ;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, WineService.deleteWineById(id)];
            case 2:
                wine = _a.sent();
                if (wine)
                    return [2 /*return*/, response.status(200).json("Vinho deletado com sucesso!")];
                else
                    return [2 /*return*/, response.status(404).json("Vinho não encontrado")];
                return [3 /*break*/, 4];
            case 3:
                erro_2 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_2.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
