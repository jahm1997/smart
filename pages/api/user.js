// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "./database";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } else if (req.method === "GET") {
      const { id } = req.query;
      if (id) {
        const user = await User.findByPk(id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "Usuario no encontrado" });
        }
      } else {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
      }
    } else if (req.method === "PUT") {
      const { id, name, email, password } = req.body;
      const updatedUser = await User.update(
        { name, email, password },
        { where: { id } }
      );
      res.status(200).json({ message: "Usuario actualizado exitosamente" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, object: error });
    // res.status(400).json({ message: error.message });
  }
}
