"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!authHeader || !token)
        return res.status(401).json({
            message: "no autorizado",
        });
    jsonwebtoken_1.default.verify(token, "secret", (err, user) => {
        if (err)
            return res.status(401).json({
                message: "no autorizado",
            });
        req.user = user;
        next();
    });
};
exports.requireAuth = requireAuth;
