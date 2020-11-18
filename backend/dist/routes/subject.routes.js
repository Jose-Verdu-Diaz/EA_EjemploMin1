"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_controller_1 = require("../controllers/subject.controller");
const router = express_1.Router();
router.get('/', subject_controller_1.subjects);
exports.default = router;
