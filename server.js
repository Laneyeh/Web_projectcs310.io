(function () {
    "use strict";
    //consts:
    const express = require("express");
    const fs = require("fs").promises;
    const app = express();
    const PORT = process.env.PORT || 8080;


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
})();