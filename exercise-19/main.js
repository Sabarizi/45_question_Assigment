var Guest_list = ['Kamran Tessori', 'Zia Khan', 'Daniyal Nagori'];
// for (let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i]+ ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
// }
var absent_Guest = 'Kamran Tessori';
var new_Guest = 'Qasim Ali Shah';
Guest_list[0] = new_Guest;
// for (let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i]+ ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
// }
console.log("Mr. ".concat(absent_Guest, " is not coming in to the party."));
console.log('Good News! we find Big Tableso we are inviting 3 more guest.');
Guest_list.unshift('zafar Abbas');
Guest_list.splice(2, 0, 'Mustufa kamal');
Guest_list.push('Muhammad Qasim');
// for (let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i]+ ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
// }
// console.log(`\nSorry we cannot arrange big table, only two will be invited.`);
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list.pop();
    console.log("Sorry Mr.' ".concat(remove_Guest, ", You are not invited for Dinner."));
    //hamry 2 invited guest
    // }for (let i=0; i<Guest_list.length; i++){
    //     console.log('Dear Mr.' + Guest_list[i]+ ',\n\nYou are still Invited.\n\nThank You!\n\n');
    // }
    //sab guest array sy remove kardiyea
    Guest_list.splice(0, 2);
    console.log(Guest_list);
    //exercise 19
    //print the message indicating the number of you are invintng to dinner.
    console.log("Total number of Guest are: ".concat(Guest_list.length));
}
