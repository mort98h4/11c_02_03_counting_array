"use strict";

window.addEventListener("DOMContentLoaded", start);

const array = [];
let counter = 0;

function start() {
    console.log("start");

    counter++;
    console.log(counter);

    setTimeout(start, 1000);

}