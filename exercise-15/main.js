"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_list = void 0;
let Guest_list = ['Kamran Tessori', 'Zia Khan', 'Daniyal Nagori'];
exports.Guest_list = Guest_list;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
let absent_Guest = 'Kamran Tessori';
let new_Guest = 'Qasim Ali Shah';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming in to the party.`);
