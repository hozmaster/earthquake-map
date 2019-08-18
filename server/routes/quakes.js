const r = require("rethinkdb");

const express = require('express');
const router = express.Router();
const bluebird = require("bluebird");
const config = require("./../data/config");


const feedUrl = "earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

// Fetch data from the USGS earthquake feed and transform all
// the locations into point objects. Insert the data into the
// `quakes` table. This query is assigned to a variable so it
// can easily be reused in two different parts of the program.
const refresh =
    r.table("quakes").insert(
        r.http(feedUrl)("features").merge(function (item) {
            return {
                geometry: r.point(
                    item("geometry")("coordinates")(0),
                    item("geometry")("coordinates")(1))
            }
        }), {conflict: "replace"});

// Use the refresh query above to automatically update the the
// earthquake database with new data at 30 minute intervals and
// delete the records that are older than 30 days
setInterval(function () {
    let conn;
    r.connect(config.database).then(function (c) {
        conn = c;
        console.log("Refresh connect");

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
}, 10 * 1000 * 60);

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

router.get("/", function (req, res, next) {
    console.log ("connected");

    let conn;
    r.connect(config.database).then(function (c) {
        conn = c;

        return r.table("quakes").orderBy(
            r.desc(r.row("properties")("mag"))).run(conn);
    })
        .then(function (cursor) {
            return cursor.toArray();
        })
        .then(function (result) {
            console.log(result);
            res.json(result);
        })
        .error(function (err) {
            console.log("Error handling /quakes request:", err);
            res.status(500).json({success: false, err: err});
        })
        .finally(function () {
            if (conn)
                conn.close();
        });
});

module.exports = router;
