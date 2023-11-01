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

    window.addEventListener("load", init);


    function init() {
        // $('#navigator').load('efd.html');
        // $('#navigator').load('ge.html');
        let elements = qsa(".nav-link");
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mouseover", () => {
                elements[i].classList.add("active");
            });
            elements[i].addEventListener("mouseout", () => {
                elements[i].classList.remove("active");
            });
        }
    }




    /**
  * Returns the element that has the ID attribute with the specified value.
  * @param {string} idName - element ID
  * @returns {object} DOM object associated with id.
  */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} query - CSS query selector.
     * @returns {object} The first DOM object matching the query.
     */
    function qs(query) {
        return document.querySelector(query);
    }

    /**
     * Returns the array of elements that match the given CSS selector.
     * @param {string} query - CSS query selector
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }

    function element(element) {
        return document.createElement(element);
    }



    app.listen(PORT);
    console.log('Server started at http://localhost:' + PORT);
})();