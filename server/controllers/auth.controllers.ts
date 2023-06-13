import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  // en esta primera parte de la funcion yo debo encargarme de recibir del body la info que necesito req.body = {email = andres@gmail.com}
  //aqui deberia validarla, por ejemplo, verificar que el email tenga el formato de un email valido... o verificar que la contrasenia tenga el formato que establezco, es decir, si estableci que tenga caracteres especiales, may, min, letras y/o numeros... es aqui en donde la tengo que validar
  //se puede validar con diferentes bibliotecas: express-validator, joi, zod... etc <-- son bibliotecas para validar en el backend
  // debemos guardar esta validacion en nuestra BD: mongodb, mysql, postgress... etc
  // por ultimo debemos generar el token

  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return res.json({ token });
};

export const profileHandler = (req: Request, res: Response) => {
  req.user;
  return res.json({
    profile: req.user,
    message: "profile autorizado",
  });
};
