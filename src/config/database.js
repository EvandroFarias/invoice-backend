module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
  logging: false,
};
