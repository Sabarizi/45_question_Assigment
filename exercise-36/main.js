"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//call function
function make_shirt(size, text) {
    console.log(`creating a ${size} shirt with message: ${text}`);
}
make_shirt('large', 'Hello World');
make_shirt('medium', 'Boss');
make_shirt('small', 'I like You!');
