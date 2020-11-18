"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const phone_1 = __importDefault(require("./phone"));
const studentSchema = new mongoose_1.Schema({
    name: { type: String },
    address: { type: String },
    phones: {
        type: Array,
        ref: phone_1.default
    }
});
exports.default = mongoose_1.model('Student', studentSchema);
