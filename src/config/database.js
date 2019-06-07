require("dotenv").config();

module.exports = {
  dialect: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_BASE,
  logging: process.env.POSTGRES_LOG === "on" ? console.log : false,
  operatorAliases: false,
  define: {
    timestamps: true,
    paranoid: process.env.NODE_ENV !== "test",
    underscored: true,
    underscoredAll: true,
    hooks: {
      validationFailed: (instance, options, { errors }) => {
        console.log(errors[0].message);
        throw Error(errors[0].message);
      }
    }
  }
};
