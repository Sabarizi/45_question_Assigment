// greatMagicians: 
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledove'];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = 'The Great' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
export {};
