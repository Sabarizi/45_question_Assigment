// first we set our age in varaible than make if else condtion,in which condition our age lie that one code will be print.
//here our age is 23 that why the condition is adult,
let age :number=23
//if person is baby less than 2 years
if (age < 2){
    console.log("person is a baby");
    }
    //if person age is 2 year or less 4 year
    else if (age >= 2 && age < 4){
        console.log("person is a toddler");
        }
// if person age equal to 4 or less than 13
    else if (age >= 4 && age < 13){
        console.log("person is kid.");
        
    }
    //if person is equl to 13 but less than 20
    else if (age >= 13 && age <20){
        console.log("person is a teenager.");
        
    }
    //if person age equl to 20 but less than 65
    else if (age >=20 && age < 65){
        console.log("person is an adult.");
        
    }
