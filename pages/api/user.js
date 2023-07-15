// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import User from "./database";
const jwt = require("jsonwebtoken");
import { sql } from "@vercel/postgres";

var createToken = (password) => {
  const token = jwt.sign({ password }, "secret");
  return token;
};

var validarToken = (password) => {
  const decoded = jwt.verify(password, "secret");
  return decoded;
};

export default async function handler(req, res) {
  const { email, password, lastName, name } = req.body;
  try {
    var result =
      await sql`CREATE TABLE IF NOT EXISTS User (  id SERIAL PRIMARY KEY, name varchar(255), password varchar(255) email varchar(255), lastName varchar(255) );`;
    // return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }

  // if (!petName || !ownerName) throw new Error("Pet and owner names required");
  // await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  if (req.method === "POST") {
    if (email && password && lastName && name) {
      const confirm = await sql` SELECT * FROM User WHERE email = ${email};`;
      let temp = validarToken(confirm[0].password);
      if (temp.password === password) {
        return res.status(400).json({ error: "Usuario ya existe" });
      }
      const contraseña = createToken(req.body.password);
      await sql`INSERT INTO User (name, lastName, email, password) VALUES (${name}, ${lastName},${email}, ${contraseña});`;
      res.status(200).json({ email, lastName, name });
    } else if (email && password) {
      const existingUser =
        await sql` SELECT * FROM User WHERE email = ${email};`;
      if (existingUser.length) {
        let temp = validarToken(existingUser[0].password);
        if (temp.password === password) {
          res.status(200).json({
            id: existingUser[0].id,
            name: existingUser[0].name,
            lastName: existingUser[0].lastName,
            email: existingUser[0].email,
          });
        } else {
          res.status(400).json({ error: "Contraseña incorrecta" });
        }
      } else {
        res.status(400).json({ error: "usuario no encontrado" });
      }
    }
  }
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const userId = await sql`SELECT * FROM User WHERE id = ${userId};`;
      if (user.length) {
        res.status(200).json(userId[0]);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    }
    const users = await sql`SELECT * FROM Pets;`;
    return res.status(200).json({ users });
  }
  if (req.method === "PUT") {
    if (id && name && lastName && email && password) {
      const existingUser = await sql`SELECT * FROM "User" WHERE id = ${id};`;

      if (existingUser.length) {
        await sql`
          UPDATE "User"
          SET name = ${name}, lastName = ${lastName}, email = ${email}, password = ${password}
          WHERE id = ${id};
        `;
        res.status(200).json({ message: "Usuario actualizado correctamente" });
      } else {
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    } else {
      res.status(400).json({ error: "Faltan datos requeridos" });
    }
  }
}
