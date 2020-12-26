"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(routes_1.default);
var uri = "mongodb+srv://" + process.env.nisitin0813 + ":" + process.env. + "@clustertodo.raz9g.mongodb.net/" + process.env.Todolist + "?retryWrites=true&w=majority";
var options = { useNewURlParser: true, useUnifiedTopology: true };
mongoose_1.default
    .connect(uri, options)
    .then(function () {
    return app.listen(PORT, function () {
        return console.log("Sever running on http://localhost:" + PORT);
    });
})
    .catch(function (error) {
    throw error;
});
