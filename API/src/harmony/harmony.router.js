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
exports.HarmonyRouter = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator"); // serve para uma camada de segurança para validar as requisições .... uso opcional
var HarmonyService = require("./harmony.service");
exports.HarmonyRouter = express_1.default.Router();
// para criar uma rota sem variável
exports.HarmonyRouter.get("/", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var harmony, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, HarmonyService.getHarmonies()];
            case 1:
                harmony = _a.sent();
                return [2 /*return*/, response.status(200).json(harmony)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, response.status(500).json(error_1.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// para criar uma rota de get com variável (no caso id)-> o nome apoós os : é o nome da variável
exports.HarmonyRouter.get("/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, harmony, erro_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(request.params.id) //precisa do parseint para passar o valor de STRING do ID para INTEIRO
                ;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, HarmonyService.getHarmonyById(id)];
            case 2:
                harmony = _a.sent();
                if (harmony)
                    return [2 /*return*/, response.status(200).json(harmony)];
                else
                    return [2 /*return*/, response.status(404).json("Harmonização não encontrada")];
                return [3 /*break*/, 4];
            case 3:
                erro_1 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_1.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
// rota para criar uma nova harmonização
exports.HarmonyRouter.post('/', (0, express_validator_1.body)("harmony").isString(), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var harmony, Newharmony, erro_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                harmony = request.body;
                return [4 /*yield*/, HarmonyService.createHarmony(harmony)];
            case 1:
                Newharmony = _a.sent();
                return [2 /*return*/, response.status(201).json(Newharmony)];
            case 2:
                erro_2 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_2.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// rota para atualizar uma harmonização
exports.HarmonyRouter.put('/:id', (0, express_validator_1.body)("harmony").isString(), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var harmony, id, updateHarmony, erro_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                harmony = request.body;
                id = parseInt(request.params.id) // ID vem da ROTA
                ;
                return [4 /*yield*/, HarmonyService.updateHarmony(harmony, id)];
            case 1:
                updateHarmony = _a.sent();
                return [2 /*return*/, response.status(201).json(updateHarmony)];
            case 2:
                erro_3 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_3.message)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// rota para deletar uma harmonização
exports.HarmonyRouter.delete("/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, harmony, erro_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(request.params.id) //precisa do parseint para passar o valor de STRING do ID para INTEIRO
                ;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, HarmonyService.deleteHarmonyById(id)];
            case 2:
                harmony = _a.sent();
                if (harmony)
                    return [2 /*return*/, response.status(200).json("Harmoniza\u00E7\u00E3o deletada com sucesso!")];
                else
                    return [2 /*return*/, response.status(404).json("Harmoniação não encontrada")];
                return [3 /*break*/, 4];
            case 3:
                erro_4 = _a.sent();
                return [2 /*return*/, response.status(500).json(erro_4.message)];
            case 4: return [2 /*return*/];
        }
    });
}); });
