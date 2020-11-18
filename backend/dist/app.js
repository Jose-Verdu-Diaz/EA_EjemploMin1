"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
//Inicializaciones
const app = express_1.default();
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(student_routes_1.default);
/* //Routes
app.get('/', (req,res) => {
    return res.send('It works!');
}); */
exports.default = app;
