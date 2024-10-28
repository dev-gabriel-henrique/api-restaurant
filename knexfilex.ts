export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db",
  },
  userNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations"
  },
  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds"
  },
}