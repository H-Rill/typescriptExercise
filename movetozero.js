"use strict";
const arr = [false, 1, 3, 6, 8, 0, 4, 0, 2, 4, 0, 4, 1];
function moveZerosToEnd(arr) {
    const nonZeros = arr.filter((element) => element !== 0);
    const zeros = Array(arr.length - nonZeros.length).fill(0);
    return [...nonZeros, ...zeros];
}
console.log(moveZerosToEnd(arr));
