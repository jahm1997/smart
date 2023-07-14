const { Sequelize } = require("sequelize");
const port = 5432;

const sequelize = new Sequelize("smart", "postgres", "97113021369", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("--> 👌 Server Online in port " + port);
    // Continúa con la lógica de tu aplicación
  })
  .catch((error) => {
    console.error(
      "Error al inicializar la base de datos y sincronizar los modelos:",
      error
    );
  });

module.exports = {
  sequelize,
};
