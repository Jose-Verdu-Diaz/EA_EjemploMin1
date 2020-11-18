"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_controller_1 = require("../controllers/student.controller");
const router = express_1.Router();
router.get('/', student_controller_1.students);
exports.default = router;
