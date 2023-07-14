// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "./database";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, password, lastName, name } = req.body;
      if (email && password && lastName && name) {
        const newUser = await User.create(req.body);
        console.log(req.body);
        return res.status(200).json(newUser);
      } else if (email && password) {
        const user = await User.findOne({ where: { email, password } });
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(400).json("Usuario no encontrado");
        }
      }
    } else if (req.method === "GET") {
      const { id } = req.query;
      if (id) {
        const user = await User.findByPk(id);
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(404).json({ message: "Usuario no encontrado" });
        }
      }
      const allUsers = await User.findAll();
      return res.status(200).json(allUsers);
    } else if (req.method === "PUT") {
      const { id, name, email, password } = req.body;
      const updatedUser = await User.update(
        { name, email, lastName, password },
        { where: { id } }
      );
      return res
        .status(200)
        .json({ message: "Usuario actualizado exitosamente" });
    }
  } catch (error) {
    console.log({ message: error.message, object: error });
    return res.status(500).json({ message: error.message, object: error });
    // res.status(400).json({ message: error.message });
  }
}
