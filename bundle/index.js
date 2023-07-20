"use strict";
//! BASIC
console.log("");
console.log("---------- BASIC ----------");
console.log("");
let myName = "Ata";
let username = 1234;
let isDead = false;
// basic array
let myGirlFriend;
myGirlFriend = ["ada", "satu"];
// tuple array
let myOtherGirlFriend;
myOtherGirlFriend = ["ada lagi", 1, true];
console.log({ myName });
console.log({ username });
console.log({ isDead });
//! CUSTOM DATA TYPE
console.log("");
console.log("---------- CUSTOM DATA TYPE ----------");
console.log("");
let temanKita = {
    name: "ragil",
    isKampret: true,
    hutang: 50000
};
console.log({ temanKita });
//! FUNCTION
console.log("");
console.log("---------- FUNCTION ----------");
console.log("");
function createNumber() {
    return 2;
}
const createString = () => "Hello You";
console.log(createNumber(), createString());
function add(x, y) {
    console.log(`${x} + ${y}` + " Hasilnya adalah ", x + y);
}
function less(x, y) {
    const result = x - y;
    return `${x} - ${y} Hasilnya adalah ${result}`;
}
add(10, 11);
const response = less(11, 10);
console.log(response);
