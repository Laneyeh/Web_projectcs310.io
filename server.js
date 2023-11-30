(function () {
    "use strict";
    //consts: installed packages
    const express = require("express");
    const multer = require("multer");
    const sqlite3 = require('sqlite3');
    const sqlite = require('sqlite');
    const fs = require("fs").promises;

    const createUnixSocketPool = require('./connect-unix.js');

    const app = express();
    const PORT = process.env.PORT || 8080;
    const DB_PATH = "database.db";

    app.use(express.static("Static"));
    app.use(multer().none()); //for multipart/form data
    app.get("/images", async function (req, res) {
        try {
            let cate = req.query.cate;
            if (!cate) {
                return res.status(400).json({ "message": "you're missing some parameters! please try again" });
            }
            let images = await getImages(cate);
            //returning the list of images
            return res.status(200).json(images);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ "message": "internal server error" });
        }
    })


    async function getImages(cate) {
        const db = await getDBConnection();
        const query = "SELECT * from data WHERE imageCategory=?; ";
        const rows = await db.all(query, [cate]);
        console.log(rows);

        await db.close(); // close the database connection

        return rows;
    }
    //readFile function
    async function readFile(file_name) {
        try {
            let contents = await fs.readFile(file_name, 'utf8');
            contents = JSON.parse(contents);
            return contents;
        }
        catch (err) {
            handleError(err)
        }
    }
    app.listen(PORT);
    console.log('Server started at http://localhost:' + PORT);

    //helper function
    /**
 * Establishes a database connection to the database and returns the database object.
 * Any errors that occur should be caught in the function that calls this one.
 * @returns {sqlite3.Database} - The database object for the connection.
 */
    async function getDBConnection() {
        const db = await sqlite.open({
            filename: DB_PATH,
            driver: sqlite3.Database
        });

        return db;
    }
})();