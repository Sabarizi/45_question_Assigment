let personName: string = "Nuzhat saba";

//step 1 show in lowercase

let lowercaseName: string = personName.toLowerCase();

console.log(lowercaseName);

let uppercaseName: string = personName.toUpperCase();

console.log(uppercaseName);

let words: string[]= personName.split(" ");

let titlecaseName: string = ""

for (let i = 0 ;i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLocaleLowerCase()+" "
};

console.log(titlecaseName)