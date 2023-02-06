"use strict";
// /routes/index.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import token from 'policies/token';
const root_1 = __importDefault(require("./root"));
const router = express_1.default.Router();
// Bonus: you can split this /routes folder in 2: private and public.
// In the private index.js file you would precede all routes declaration
// with a function that checks if the authentication token is present
// in all requests and it's valid.
router.use(root_1.default);
// router.use(orders);
exports.default = router;
