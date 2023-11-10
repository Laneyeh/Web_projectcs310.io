window.addEventListener("load", init);


function init() {
    let elements = qsa(".nav-link");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", () => {
            elements[i].classList.add("active");
        });
        elements[i].addEventListener("mouseout", () => {
            elements[i].classList.remove("active");
        });
        elements[i].addEventListener("click", () => {
            let sections = qsa(".section-text");
            for (let i = 0; i < sections.length; i++) {
                sections[i].classList.add("hidden");
            }
            let list1 = elements[i].id.split("-"); //when you want to get the first item
            let sectionID = list1[0] + "-text"; //id becomes efd-text
            id(sectionID).classList.remove("hidden");
        })
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