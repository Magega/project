"use strict";

const ansvers = [];

// ansvers[0] = prompt(" What is your name?");
// ansvers[1] = prompt(" How are u??");
// ansvers[2] = prompt(" name?");

const a = [1, 2];
const b = [10, 20];

function sum(a, b) {
    return a + b;
}
const fn = sum.bind(...b);
const res = fn(...a);
console.log(res);