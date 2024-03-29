let Guest_list :string[] =['Kamran Tessori','Zia Khan','Daniyal Nagori'];

for (let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr.' + Guest_list[i]+ ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

let absent_Guest :string = 'Kamran Tessori';

let new_Guest :string = 'Qasim Ali Shah';

Guest_list[0] = new_Guest ;

for (let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr.' + Guest_list[i]+ ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming in to the party.` )

