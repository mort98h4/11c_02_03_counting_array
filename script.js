"use strict";

window.addEventListener("DOMContentLoaded", start);

const array = [];
let counter = 0;

function start() {
    console.log("start");

    array.unshift(counter);
    array.splice(9);
    console.log(array);
    counter++;

    setTimeout(start, 1000);

}