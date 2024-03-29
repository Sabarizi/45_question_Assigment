// unchanged magician  

let magician : string[]=['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledove'];

function copyArry(arr:string[]) {
    //[... its mean copy]
    return [...arr]
    
}


function make_great(magicianArry:string[]) {

    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'The Great' + magicianArry[i];
        
    }
    
}

function show_magicians(magicians:string[]) {
    
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

