// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicion : string[]=['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledove'];
function show_magicions(magicians:string[]) {
    
    magicians.forEach(element => {
        console.log(element);
        
    });
    
}

show_magicions(magicion)