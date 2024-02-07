"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv"); //sistema para configuracao de ambientes ......  o arquivo .env, salva dados que nao ficam públicos do ambiente....
var express_1 = require("express");
var cors_1 = require("cors"); //serve para abrir as portas para as conexções
var country_router_1 = require("./country/country.router");
var grape_router_1 = require("./grape/grape.router");
var harmony_router_1 = require("./harmony/harmony.router");
var type_router_1 = require("./type/type.router");
var user_router_1 = require("./user/user.router");
var shopping_router_1 = require("./shopping/shopping.router");
var review_router_1 = require("./review/review.router");
var wine_router_1 = require("./wine/wine.router");
//fazer o import de todas as rotas
dotenv.config();
// para garantir que vai conectar na porta 8000 (esta no .env), porque se entrar em outra porta ele irá fechar a aplicação
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/country", country_router_1.CountryRouter);
app.use("/api/grape", grape_router_1.GrapeRouter);
app.use("/api/harmony", harmony_router_1.HarmonyRouter);
app.use("/api/type", type_router_1.TypeRouter);
app.use("/api/user", user_router_1.UserRouter);
app.use("/api/shopping", shopping_router_1.ShoppingRouter);
app.use("/api/review", review_router_1.ReviewRouter);
app.use("/api/wines", wine_router_1.WineRouter);
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
