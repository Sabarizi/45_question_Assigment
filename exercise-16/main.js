"use strict";
let Guest_list = ['Kamran Tessori', 'Zia Khan', 'Daniyal Nagori'];
// for (let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr.' + Guest_list[i]+ ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
// }
let absent_Guest = 'Kamran Tessori';
let new_Guest = 'Qasim Ali Shah';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming in to the party.`);
console.log('Good News! we find Big Tableso we are inviting 3 more guest.');
Guest_list.unshift('zafar Abbas');
Guest_list.splice(2, 0, 'Mustufa kamal');
Guest_list.push('Muhammad Qasim');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
