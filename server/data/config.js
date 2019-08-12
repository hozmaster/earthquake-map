/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/
const fs = require('fs');
let service = {};
try {
    const raw_data = fs.readFileSync(__dirname + '/config.json');
    service = JSON.parse(raw_data);
}   catch (e) {
    throw "Required config.json not found from the installation.";
}

module.exports = {
    database: {
        db: service.rdb.database,
        host: process.env.RDB_HOST || service.rdb.host,
        port: process.env.RDB_PORT || service.rdb.port
    }
};
