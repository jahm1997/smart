import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("smart", "postgres", "97113021369", {
  host: "localhost",
  dialect: "postgres",
  logging: true,
  alter: false,
  force: false,
});

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("La tabla Users se ha sincronizado con la base de datos.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla Users:", error);
  });

export default User;
