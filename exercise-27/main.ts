//if else chain 
//if the alien is green print a massage that the players earned 5 points.
let alienColor: string ="green";

if(alienColor =="green"){
    console.log("version 1: players earned 5 points.");
}
else if (alienColor == "yellow"){
    console.log("players earned 10 points.");
}
else if (alienColor === "red"){
    console.log("players earned 15 points.");
}
else{
    console.log("please select right color");
}

//if the alien is yellow print a message tat the players earnd 10 points.
//version 2
alienColor = "yellow"
if(alienColor =="green"){
    console.log("players earned 5 points.");
}
else if (alienColor == "yellow"){
    console.log("version 2: players earned 10 points.");
}
else if (alienColor === "red"){
    console.log("players earned 15 points.");
}
else{
    console.log("please select right color");
}
//if the alien color is red print message players earned 15 points.
//version 3
alienColor = "red"
if(alienColor =="green"){
    console.log("players earned 5 points.");
}
else if (alienColor == "yellow"){
    console.log("players earned 10 points.");
}
else if (alienColor === "red"){
    console.log("version 3: players earned 15 points.");
}
else{
    console.log("please select right color");
}

