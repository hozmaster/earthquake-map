
module.exports = {
  database: {
    db: "quake",
    host: process.env.RDB_HOST || "localhost",
    port: process.env.RDB_PORT || 32769
  },

  port: 8090
}
