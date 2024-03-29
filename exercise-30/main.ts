// make arry of five person and make one of then adim and then make specil masg to admin

let userName :string [] =["alvid","tom","herry","admin","jerry"];

for(let i = 0; i < userName.length; i++){
    if(userName [i] == "admin"){
        console.log(`Hello ${userName[i]} would you like to see a status repots? `)
    }else{
        console.log(`Hello ${userName[i]} thank you for logging in again ! `);
    }
}