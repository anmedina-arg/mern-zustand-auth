"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
    // en esta primera parte de la funcion yo debo encargarme de recibir del body la info que necesito req.body = {email = andres@gmail.com}
    //aqui deberia validarla, por ejemplo, verificar que el email tenga el formato de un email valido... o verificar que la contrasenia tenga el formato que establezco, es decir, si estableci que tenga caracteres especiales, may, min, letras y/o numeros... es aqui en donde la tengo que validar
    //se puede validar con diferentes bibliotecas: express-validator, joi, zod... etc <-- son bibliotecas para validar en el backend
    // debemos guardar esta validacion en nuestra BD: mongodb, mysql, postgress... etc
    // por ultimo debemos generar el token
    const token = jsonwebtoken_1.default.sign({
        test: "test",
    }, "secret", {
        expiresIn: 60 * 60 * 24,
    });
    return res.json({ token });
};
exports.loginHandler = loginHandler;
const profileHandler = (req, res) => {
    req.user;
    return res.json({
        message: "profile autorizado",
    });
};
exports.profileHandler = profileHandler;
