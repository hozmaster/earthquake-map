/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/
const fs = require('fs');
let service = fs.readFileSync('config.json');

module.exports = {
    database: {
        db: service.rdb.database,
        host: process.env.RDB_HOST || service.rdb.host,
        port: process.env.RDB_PORT || service.rdb.port
    },

    port: service.port
};
