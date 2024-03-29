// unchanged magician  
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledove'];
function copyArry(arr) {
    //[... its mean copy]
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'The Great' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArry = copyArry(magician);
make_great(copyMagicianArry);
console.log('\n\nThis is my original arry:');
show_magicians(magician);
console.log('\n\nThis is my modified arry:');
show_magicians(copyMagicianArry);
export {};
