"use strict";
let personName = "Nuzhat saba";
//step 1 show in lowercase
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLocaleLowerCase() + " ";
}
;
console.log(titlecaseName);
