// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function des_city(city:string,country: string) {
    return`${city},${country}`;
}

console.log(des_city('lahore','pakistan'));
console.log(des_city('tokyo','japan'));
console.log(des_city('paris' ,'france'));

