"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
//Inicializaciones
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const connection = mongoose_1.default.connection;
mongoose_1.default.connect(config_1.default.DB.URI, dbOptions);
connection.once('open', () => {
    console.log('Conexion a MongoDB establecida');
});
connection.on('error', err => {
    console.log(err);
    process.exit(0);
});
