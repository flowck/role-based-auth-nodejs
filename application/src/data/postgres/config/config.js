const { PG_USERNAME, PG_PASSWORD, PG_HOST } = process.env;

module.exports = {
  development: {
    username: PG_USERNAME || "root",
    password: PG_PASSWORD || null,
    database: "rolebasedauth_development",
    host: PG_HOST || "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: PG_USERNAME || "root",
    password: PG_PASSWORD || null,
    database: "rolebasedauth_test",
    host: PG_HOST || "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: PG_USERNAME || "root",
    password: PG_PASSWORD || null,
    database: "rolebasedauth_production",
    host: PG_HOST || "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  }
};
