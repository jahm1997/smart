// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "./database";

const jwt = require("jsonwebtoken");

var createToken = (password) => {
  const token = jwt.sign({ password }, "secret");
  return token;
};

var validarToken = (password) => {
  const decoded = jwt.verify(password, "secret");
  return decoded;
};

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, password, lastName, name } = req.body;
      if (email && password && lastName && name) {
        const newUser = await User.create({
          name,
          email,
          password: createToken(req.body.password),
          lastName,
        });
        res.status(200).json(newUser);
      } else if (email && password) {
        const user = await User.findOne({ where: { email } });
        if (user) {
          let temp = validarToken(user.password);
          let response = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
          };
          if (temp.password === password) {
            res.status(200).json(response);
          } else {
            res.status(400).json({ error: "Contraseña incorrecta" });
          }
        } else {
          res.status(400).json({ error: "usuario no encontrado" });
        }
      }
    } else if (req.method === "GET") {
      const { id } = req.query;
      if (id) {
        const user = await User.findByPk(id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "Usuario no encontrado" });
        }
      }
      const allUsers = await User.findAll();
      res.status(200).json(allUsers);
    } else if (req.method === "PUT") {
      const { id, name, email, password, lastName } = req.body;
      const updatedUser = await User.update(
        { name, email, lastName, password: createToken(password) },
        { where: { id } }
      );
      console.log(updatedUser);
      return res
        .status(200)
        .json({ message: "Usuario Actualizado con Exito!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, object: error });
    // res.status(400).json({ message: error.message });
  }
}
