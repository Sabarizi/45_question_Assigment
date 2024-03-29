//sandwiches ,function that accepts arry
function makeSandwich (item:string[]) {
    console.log('\nMaking your sandwich with:');

    item.forEach(element => console.log("- " + element));
    console.log('\nEnjoy your sandwich.!');
    
}
makeSandwich(['chees' , 'chiken' , 'lettuce']);
makeSandwich(['cuban' , 'club']);
makeSandwich(['peanut butter' , 'Ham'])