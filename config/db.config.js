require("dotenv").config();

module.exports = {
  HOST: "ep-icy-mud-a15dfm63-pooler.ap-southeast-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "5CGS3BrhfwjP",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};