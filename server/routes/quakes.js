const r = require("rethinkdb");

const express = require('express');
const router = express.Router();
const bluebird = require("bluebird");

const feedUrl = "earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

// Use the refresh query above to automatically update the the
// earthquake database with new data at 30 minute intervals and
// delete the records that are older than 30 days
setInterval(function () {
    let conn;
    r.connect(config.database).then(function (c) {
        conn = c;

        return bluebird.join(refresh.run(conn),
            r.table("quakes")
                .filter(r.epochTime(r.row("properties")("time").div(1000)).lt(
                    r.now().sub(60 * 60 * 24 * 30))).delete().run(conn));
    })
        .error(function (err) {
            console.log("Failed to refresh:", err);
        })
        .finally(function () {
            if (conn)
                conn.close();
        });
}, 30 * 1000 * 60);

let conn;
r.connect(config.database).then(function (c) {
    conn = c;
    return r.dbCreate(config.database.db).run(conn);
})
    .then(function () {
        return r.tableCreate("quakes").run(conn);
    })
    .then(function () {
        return r.table("quakes").indexCreate(
            "geometry", {geo: true}).run(conn);
    })
    .then(function () {
        return refresh.run(conn);
    })
    .error(function (err) {
        if (err.msg.indexOf("already exists") == -1)
            console.log(err);
    })
    .finally(function () {
        if (conn)
            conn.close();
    });
