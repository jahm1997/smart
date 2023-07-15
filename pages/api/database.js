const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("smart", "postgres", "97113021369", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: true,
//   alter: true,
//   force: false,
// });

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  logging: true,
  alter: true,
  force: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
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
    console.log("La tabla Cuentas se ha sincronizado con la base de datos.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla Cuentas:", error);
  });

export { User, sequelize };
